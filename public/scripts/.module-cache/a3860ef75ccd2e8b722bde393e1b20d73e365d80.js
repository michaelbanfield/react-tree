var converter = new Showdown.converter();

var PanelContent = React.createClass({displayName: "PanelContent",
  render: function() {
    var data = this.props.data
    var rawMarkup = converter.makeHtml(this.props.content.toString());
    return (
    React.createElement("div", {className: "panel-body"}, 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}}), 
        React.createElement(PanelList, {data: data, master_id: this.props.id})
    )
    );
}
});
var Panel = React.createClass({displayName: "Panel",
  getInitialState: function() {
        return { show: false };
    },
    onClick: function() {
        this.setState({ show: !this.state.show });
    },
  render: function() {
    return (
    React.createElement("div", {className: "panel panel-default"}, 
    React.createElement("div", {className: "panel-heading"}, 
      React.createElement("div", null, 
        
        React.createElement("button", {type: "button", className: "btn btn-default btn-xs", onClick: this.onClick}, 
         !this.state.show? React.createElement("span", {className: "glyphicon glyphicon-plus-sign", "aria-hidden": "true"}) :React.createElement("span", {className: "glyphicon glyphicon-minus-sign", "aria-hidden": "true"})
        ), 
         " " + this.props.title, " ", this.props.reference? React.createElement("span", {className: "label label-primary"}, this.props.reference) : null
      )

    ), 
       this.state.show? React.createElement(PanelContent, {content: this.props.content, id: this.props.id, data: this.props.data}) : null
    )
    );
  }
});
var PanelList = React.createClass({displayName: "PanelList",
  render: function() {
    var master_id = this.props.master_id
    var data = this.props.data
    var panels = this.props.data.map(function (question) {
      return (
        (question.master == master_id)? React.createElement(Panel, {title: question.title, content: question.content, data: data, id: question.id, key: question.id, reference: question.reference}) : null
      );
    });
    return (
    React.createElement("div", null, 
    panels
    )
    );
}
});
var TopDiv = React.createClass({displayName: "TopDiv",
   getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
    React.createElement("div", null, 
      React.createElement(PanelList, {master_id: null, data: this.state.data})
    )
    );
}
});