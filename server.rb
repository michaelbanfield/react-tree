
require 'webrick'
require 'json'


data  = react_version = JSON.parse(File.read('./data.json'))

puts 'Server started: http://localhost:3000/'

root = File.expand_path './public'
server = WEBrick::HTTPServer.new :Port => 3000, :DocumentRoot => root

server.mount_proc '/data.json' do |req, res|
  res['Content-Type'] = 'application/json'
  res.body = data.to_json
end

trap 'INT' do server.shutdown end

server.start
