import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styled from "styled-components";

const Item = styled.a`
  display: block;
  cursor: pointer;
  text-align: left;

  .title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;

    span.icon {
      background: rgb(143, 157, 170);
      width: 16px;
      height: 3px;
      position: absolute;
      display: block;
      right: 0;
    }
    span.icon2 {
      background: rgb(143, 157, 170);
      width: 3px;
      height: 16px;
      position: absolute;
      display: block;
      right: 6px;
      top: 18px;
    }
  }

  .description {
    padding-bottom: 1rem;
  }
`;
class AccordionItem extends React.Component {       
  state = {
    showIcon: true,
    showIcon2: true
  };


  toggleOpen = (index) => {
    this.props.changeToogleFlags(index);
  };
  

  render() {
    const { data: { title, description }, count , index , flag} = this.props;
    return (
      <Item onClick={() => this.toggleOpen(index)} className="mb-[30px] bg-[#128530] rounded-lg px-[30px] py-[20px]  text-white">
        <ReactCSSTransitionGroup
          transitionName="show-accordion"
          transitionEnterTimeout="300"
          transitionLeaveTimeout="150"
          component="div"
        >
          <p className="title text-[23px]">
            <span>{title}</span>
            <span class="icon" />
            <ReactCSSTransitionGroup
              transitionName="icon"
              transitionEnterTimeout="50"
              transitionLeaveTimeout="50"
            >
              {!flag ? <span class="icon2" /> : null}
            </ReactCSSTransitionGroup>
          </p>
          {flag ? (
            <div className="description text-[20px]" key={count}>
              {description}
            </div>
          ) : null}
        </ReactCSSTransitionGroup>
      </Item>
    );
  }
}
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleFlags : [],      
    }
  }
  componentDidMount() {
    const { items } = this.props;
    let toogleFlags = [];
    items.map(() => {
      toogleFlags.push(false);
    })
    this.setState({toogleFlags});
  }

  changeToogleFlags = (index) => {
    let toogleFlags = this.state.toogleFlags;
    toogleFlags.map((item, i) => {
      if(i !== index) {
        toogleFlags[i] = false
      }
    });
    toogleFlags[index] = !toogleFlags[index];
    this.setState({toogleFlags});
  }

  render() {
    const { items } = this.props;
    return (
      <div className="2xl:px-48 xl:px-48 lg:px-48 px-6 min-w-[500px] pt-24">
        {items.map((item, i) => (
          <AccordionItem key={i.toString()} flag={this.state.toogleFlags[i]} changeToogleFlags={this.changeToogleFlags} data={item} index={i} count={i.toString()} />
        ))}
      </div>
    );
  }
}

export default Accordion;
