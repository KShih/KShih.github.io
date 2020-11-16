'use strict';
// exports.__esModule = true;
import React, { Component } from 'react';
var react_vertical_timeline_component_1 = require('react-vertical-timeline-component');
require('react-vertical-timeline-component/style.min.css');

class Resume extends Component {
  render () {
    var s = React.createElement(react_vertical_timeline_component_1.VerticalTimeline, null,
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--work', contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' }, contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' }, date: '2011 - present', iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Creative Director'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'Miami, FL'),
        React.createElement('p', null, 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--work', date: '2010 - 2011', iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Art Director'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'San Francisco, CA'),
        React.createElement('p', null, 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--work', date: '2008 - 2010', iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Web Designer'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'Los Angeles, CA'),
        React.createElement('p', null, 'User Experience, Visual Design')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--work', date: '2006 - 2008', iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Web Designer'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'San Francisco, CA'),
        React.createElement('p', null, 'User Experience, Visual Design')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--education', date: 'April 2013', iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Content Marketing for Web, Mobile and Social Media'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'Online Course'),
        React.createElement('p', null, 'Strategy, Social Media')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--education', date: 'November 2012', iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Agile Development Scrum Master'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'Certification'),
        React.createElement('p', null, 'Creative Direction, User Experience, Visual Design')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { className: 'vertical-timeline-element--education', date: '2002 - 2006', iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' } },
        React.createElement('h3', { className: 'vertical-timeline-element-title' }, 'Bachelor of Science in Interactive Digital Media Visual Imaging'),
        React.createElement('h4', { className: 'vertical-timeline-element-subtitle' }, 'Bachelor Degree'),
        React.createElement('p', null, 'Creative Direction, Visual Design')),
      React.createElement(react_vertical_timeline_component_1.VerticalTimelineElement, { iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' } }));
    return s;
  }
}

export default Resume;
