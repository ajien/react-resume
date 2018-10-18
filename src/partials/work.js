import React, { Component } from 'react';

class Work extends Component {
    
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick(e) {
    e.preventDefault();
      
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    
  }
    
    showDesc() {
        return (
            <div className="desc">
                {this.props.item.description}
            </div>
        );
    }

  render() {

    return (
        
        <div className={ 'item col-md-3 col-xs-6 ' + this.props.item.category } >
            <div className={this.state.isToggleOn ? 'item-inner active' : 'item-inner'} >
                <figure className="figure">
                    <img className="img-responsive" src={this.props.item.image} alt={this.props.item.title} />
                </figure>
                <div className="content text-left">
                    <a href={this.props.item.link}>
                        <h3 className="sub-title">
                            {this.props.item.title}
                        </h3>
                    </a>
                    <div className="meta">{this.props.item.type}</div>

                    { this.showDesc() }
    
                </div>
                <a onClick={this.handleClick} className="link-mask" href={this.props.item.link}></a>
            </div>
        </div>
        
    );
  }
}

export default Work;