// console.log('Hello form dat-vis-projetcs.js');

// import React from 'react';
// import ReactDOM from 'react-dom';
const data = [
  {
    title: 'Meteor World Map',
    description: 'An app to map data about meteor landing recordings across the globe, each hit represented as a point of varying size and colour, corresponding to its mass. This map also offers hover functionality to show additional data. Data is provided by a JSON api and is scalable, meaning the size variations are evened out by a logarithmic function.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337548/Portfolio/data_vis_meteor_map.png',
    alt: 'World meteor map',
    link: 'https://codepen.io/Oddert/full/zjvaXZ/'
  },
  {
    title: 'Stock Market Tracker',
    description: 'A full-stack app to show historical and real time data for selected stocks, syncing the display options between users. \n This means that ass users add and remove stocks, everyone else will see the app update in real time. This could be used in meetings to let everyone see the same data on their individual devices. Live data is provided with websockets and data from IEX.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337550/Portfolio/stock_banner.png',
    alt: 'Stock market tracker',
    link: 'https://glitch.com/edit/#!/crimson-bandana?path=README.md:1:0'
  },
  {
    title: 'Product Category Tree Map',
    description: 'A tree map with variable inputs to display top sales in the categories of ‘Video Games’, ‘Movies’, and top funded Kickstarter campaigns.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337549/Portfolio/data_vis_tree_map.png',
    alt: 'A treemap for top sales data in three categories.',
    link: 'https://codepen.io/Oddert/full/rZMNby/'
  },
  {
    title: 'USA Educational Data Choropleth',
    description: 'A choropleth map of all counties in the US representing the portion of the population with a Bachelors degree or higher.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337549/Portfolio/data_vis_usa_education.png',
    alt: 'USA Educational Data Choropleth',
    link: 'https://codepen.io/Oddert/full/NLjRvE/'
  },
  {
    title: 'GDP Interactive Bar Chart',
    description: 'A simple bar chart with a hover tooltip created to map US gross domestic product from a JSON api.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337548/Portfolio/data_vis_bar_chart.png',
    alt: 'A D3.js GDP bar chart.',
    link: 'https://codepen.io/Oddert/full/KoEwYb?editors=1010'
  },
  {
    title: 'Scatter Plot Graph',
    description: 'An interactive, time-based scatter plot graph rendering static data for doping statistics for the Alpe d\'Huez fastest race times, served from a static JSON file.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337549/Portfolio/data_vis_plot_graph.png',
    alt: 'A D3 Scatter Plot Graph.',
    link: 'https://codepen.io/Oddert/full/ZxNQpa/'
  },
  {
    title: 'Climate Heat Map',
    description: 'A heat map showing earth surface climate temperature per month over several hundred years. Heat data is represented by colour and a sliding bar at the bottom. Data again server through a JSON api.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337548/Portfolio/data_vis_heat_map.png',
    alt: 'Climate heat map.',
    link: 'https://codepen.io/Oddert/full/bvPgdx/'
  },
  {
    title: 'State Contiguity',
    description: 'A Force Directed Graph showing state contiguity for all countries in the world. Force directed graphs (FDG’s) represent data as nodes on a meshwork and give the user the ability to drag and hover individual nodes to see the country name.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337549/Portfolio/data_vis_state_contiguity.png',
    alt: 'A world state force directed graph.',
    link: 'https://codepen.io/Oddert/full/XqJEKY/'
  }
];



class Card extends React.Component {
  render() {
    return (
      <div className="project_card">
        <a href={this.props.item.link}>
          <h3>{this.props.item.title}</h3>
        </a>
        <div className="content">
          <a href={this.props.item.link} className="img_wrapper">
            <img src={this.props.item.img} alt={this.props.item.alt} />
          </a>
          <p>{this.props.item.description}</p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="project_container">
        {this.props.data.map((each) => <Card key={each.title} item={each} />)}
      </div>
    )
  }
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));

//if using inline babel, we cant use import, have to use the inline require
