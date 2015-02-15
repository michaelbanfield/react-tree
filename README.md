# react-tree

This is a React component that renders a recursive tree of Bootstrap Panels based on JSON data. This is useful for call scripting and knowledge base applications.
The content of the panels renders Markdown syntax and each panel can have an optional reference/label added to it.

##Usage
The only requirement for the demo is Ruby.

    git clone https://github.com/michaelbanfield/react-tree.git
    cd react-tree
    ruby server.rb

Go to [localhost:3000](http://localhost:3000/)

To use the component in your own projects just add the code below, and replace **url-path** with a path to your own JSON.

        <script src="//cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        
        ...

        <div id="content"></div>
        <script src="scripts/tree.js"></script>
        <script>
            React.render(React.createElement(TopDiv, 
            {url: <url-path>}),document.getElementById('content'));
        </script>
