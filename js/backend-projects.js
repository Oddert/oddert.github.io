
const data = [
  {
    title: 'Timestamp Microservice',
    description: 'A microservice to return a parsed date in JSON format. Handy for quickly converting between UNIX timestamps and readable date strings (often difficult with vanilla JavaScript date objects).',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337547/Portfolio/backend-timestamp.png',
    alt: 'Timestamp microservice screenshot',
    link: 'https://enormous-sandwich.glitch.me/ '
  },
  {
    title: 'Request Header Parser',
    description: 'A microservice to return JSON data on the client that made a request to the server including IP, OS and system info.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337546/Portfolio/backend-req-header.png',
    alt: 'Request Header Parser screenshot',
    link: 'https://picayune-surf.glitch.me/ '
  },
  {
    title: 'URL Shortener',
    description: 'A micro-URL provider to create a four-digit code which redirects to the original URL. ',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337547/Portfolio/backend-short-url_1.png',
    alt: 'URL Shortener screenshot',
    link: 'https://glitch.com/edit/#!/nosy-dream?path=app.js:11:0 '
  },
  {
    title: 'Image Abstractor',
    description: 'A simple service for providing images based on a search term in JSON format with additional details and pagination. This also records search data which can also be viewed in JSON format.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337546/Portfolio/backend-image.png',
    alt: 'Image Abstractor screenshot',
    link: 'https://glitch.com/edit/#!/foam-eye?path=README.md:5:186'
  },
  {
    title: 'File Metadata Microservice',
    description: 'A basic service to upload files and return a JSON response for the file’s size.',
    img: 'https://res.cloudinary.com/oddert/image/upload/v1571337547/Portfolio/backend-metadata.png',
    alt: 'File Metadata Microservice screenshot',
    link: 'https://glitch.com/edit/#!/vine-pocket?path=README.md:1:0'
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
