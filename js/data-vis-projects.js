// console.log('Hello form dat-vis-projetcs.js');

// import React from 'react';
// import ReactDOM from 'react-dom';
const data = [
  {
    title: 'GDP Interactive Bar Chart',
    description: 'A simple bar chart with a hover tooltip created to map US gross domestic product from a JSON api.',
    img: 'https://lh3.googleusercontent.com/nKRGuqiexnvYEstGp-odJNCR59Zi9bz1LZ3EI40UJwjTzcBxKJ7BJgqCW5vw2IAG7g9RHEQmcK-XNXX7IN_ov6-VHI7zTCZDv3McADTKh6F5P0dOyqZYZY-Jb316iux-nrxa7h4mhhNdnzf1co330hjkISdciqRNpCq6WVGsRaSmKgyAYdqYyzabMrGIkYAalwMZ5FUJTYUgzsomtJcjWnMMuBtX82AkBkvZHo81Atmybc8vbbFt7sejIOzN1Viz737NDEwpwbkOC1_kXEKhvg6CTqTCMynLe9B-PGeLxIF5dDr7j8Y6jUMrqMwnwl0EjJlxLzDGxtIO6BmeRB20p3Zg_-59074hZWeJapPIJ9x0eTefTXaOpzGAudm2QJt-g-4su9vUW2VxUXzhYdBxHQw2KJmATpws3OBwgcP8C6gaar_Dr3o8XD4LX-izJapRLvHm5R0yZp_LrVofDJ4hSxgoADUCKXdikZw0neHjKarnJDI-jycKlImyoRsHiUWC04MtxDOYY8yODT0TZzqnyGVkFXo6ILNzDAXj716JB6jB_9ok_Mu2qahXaXKMoEHgMmBt1qF2DMdC3bQ6CJAvlQnx67K8x2rgiRZPR_1c=w1364-h866-no',
    alt: 'A D3.js GDP bar chart.',
    link: 'https://codepen.io/Oddert/full/KoEwYb?editors=1010'
  },
  {
    title: 'Scatter Plot Graph',
    description: 'An interactive, time-based scatter plot graph rendering static data for doping statistics for the Alpe d\'Huez fastest race times, served from a static JSON file.',
    img: 'https://lh3.googleusercontent.com/qiA2AJnubezSOIlXVKoF4Qe9xMCcopTgwdbq_fIaDYv94MMPTvfQYkpzZC_I4Pol2c-nahp4GLDeK9hizPxdLkgdPTk4OdUm3GKWtOSzTNccAtEHb-mQb03x-W-JJMVdmdWXIDJOTOjkZFvleuvbOLudWZ4_u7eAVuygOBOzOOGPKoALLiZrgXIdFVBEFuNZuNMHOwPzq0fmIJJPkKVLQbMNhwo4tA3ZMslM5oPXAb2Ku7bSWHLxgCBm_VzeHOuKqK-L44u_ooPdcPZZpHVP5_u7aSkmUjDjmh5wUhXvR9Xnf-xFh_OY4PiQu1vU_EmESkWKHh6bZf4iKU4GowzApxhp245JNjYuZ7emEaB9_gZUSfdYWW8fwWyJ0CGDo3Qi7tbjYu-FnobxuCx-L2x3CQOKPV2AIYO-yESaDWzhKUG_UJx8fE8ZVltxwo2l1LnV0ezdpVD3rTybt7_QfwCsKSkZYEW-Lw299dAIVZtWMRYVLImjNEqmuSkvqIZ3RrDixi_ziHAmu7pz3WjDdAw0yyDWdv5AnUxGACpTWRIIchg4n1TLOLhOjYifG3slwO9Shf1R8Nt368GnRc-tHxaysscTeqjxYlavYbtP9Qc5=w1364-h690-no',
    alt: 'A D3 Scatter Plot Graph.',
    link: 'https://codepen.io/Oddert/full/ZxNQpa/'
  },
  {
    title: 'Climate Heat Map',
    description: 'A heat map showing earth surface climate temperature per month over several hundred years. Heat data is represented by colour and a sliding bar at the bottom. Data again server through a JSON api.',
    img: 'https://lh3.googleusercontent.com/xE6TAPnv0kNnqskPdLvbOcBUj36BPyJTOCnA5OEdqRu8tBn3I1kRqWWka2oxQfbNE2xTVEbRElTmxuVgI_hpWGPgVxGFWc4kZOHtUNBaCzMV4nufv2pL84PhB2t8GenlfpsSiYCy2c8Cumg4ZpZws7rAw1RYVtjF8ms_olyFP69D21sRwjLPj6pDs62QeN45SLSX7zFQtX9XBg4BFUovHJEkyPrtx_tK7UQ9mNFUu4M_uNqNddaPm6bGQ3T4Sw5Na3ywvOhvFpDX3Jz8NE2W-lA1pg8rnCWv7wZsKDudkpZCZ3rqDZpS7WhxlgIndT4Ve2FJuyLbx9Da32_1TQEd74-PimCIFX8OkTKbeO6FixnBGw-rxq1P5spZoxn7SgOOVcIk66laJTrzYyADLb5gRbE6F4IyTQEy8-80agWEp6AopLIEwriL7vcswFSaqZldviyVFZkgwxQRyFkMz9rCuFqKJ6mDnlVeqy2X6T0h6A5br32FbWeZpKSdbnmHgf3MZErK5sx9XLmfoejocrb1c4UHOyIM778ru3Xie2Uo2khpxdliC_mpKXyF74_s0N1s6r26LFV8fzn4DpTsapXlyCRvoqI3A_ck3t5v-Unm=w1364-h780-no',
    alt: 'Climate heat map.',
    link: 'https://codepen.io/Oddert/full/bvPgdx/'
  },
  {
    title: 'State Contiguity',
    description: 'A Force Directed Graph showing state contiguity for all countries in the world. Force directed graphs (FDG’s) represent data as nodes on a meshwork and give the user the ability to drag and hover individual nodes to see the country name.',
    img: 'https://lh3.googleusercontent.com/TXNi2ogfDOfGq10VtBjE1wLgNELlfm_BAEAXuQ_1XbmNT7WZlHPxTjk69s7fV5dFxhpZXL2u4_4l9MbEf6rltod7y__CBVahG0-uVD76KICt4NQHGwnTv1_RQCGyvrjLIwNNvzYuCKBWVJCCJGv6HrYGd0sncw0vvr5WAZOOYsnD8LX8B6SLMVtq9Cvapi2Hnq-LeWWISpwaXN28N7BUT1TH1PhV9vyI0s7nthUkexAryExyT0Zrtzk9e_gMSblLc4A8Z54pkN6zXw8qAovYIuvEI_JUYiZCxns8h60L70HHBbfCGFMqelP_-MkNda4aKKXYIqjqdyVcZ7KD-1Og5bw2O8JwuR62c_W-TM7x8taAjhrCd7r48lIEv30aHYHBZ-_P33jRSCIkVaHcfrJ_HRiXiwKOt-_yNnMgitlFwImE79KQ59JJBMyMNl-x2sXoohqVdTJzWNv07EAc7yoj0fP0x-1LTZcSHedH5l4SK6o6UePHEWIIk17mJGvYkJjurnHAU825e94K5HShmI2PhTLyBq0KnP8BjQoiJwuC6SQW9wLryLfiw_GbMICiSigKABve2FgVH5CP516KQcojDhtnwBNwVcOqAhhZljl-=w1364-h736-no',
    alt: 'A world state force directed graph.',
    link: 'https://codepen.io/Oddert/full/XqJEKY/'
  },
  {
    title: 'Meteor World Map',
    description: 'An app to map data about meteor landing recordings across the globe, each hit represented as a point of varying size and colour, corresponding to its mass. This map also offers hover functionality to show additional data. Data is provided by a JSON api and is scalable, meaning the size variations are evened out by a logarithmic function.',
    img: 'https://lh3.googleusercontent.com/wryffYo5m9jA02Zbgq4wDPc9sqooCs4qL9x58OR_5UX4dfiU5rOkIpJzD04pWL3nKHi9CqPlsVBKz1DZGd9MuSP0Q32myZPzCeUeyghvxaitEzkXOYYBl7QWId4C6uPw0TOhMwxML-gl8Jj9v0bGbjilGSpTPm0FIr2p5ncLUFcyaa7wPp-0Y8BzXqwjoHgunCwoGvMzB2wAP_0A9OSisl6H0GQz5AK7QoOO_-kWpVobx0uSHlUbFWVviaLTfkx6-HfW_zDwRJBZNF5ovjn4Zb1kRtTxMHAw8EivJ-PmaJHP-kyrGP1w_mS7ZMvZ60Oh5QboJtvSLoo1_NyJL9L6hpwyOYS3Y_djjxmGd0LaBExmStm95mckmdgRLpMD0gQstQIobe0yhABjvDnih9XojNxiSOg61WqK0pgmeSPuANSfjX2Zpl_0_ah9E_oTLc8tPbLmcj0g6F7KJNjByAHV6ZFxruKvi4PX0jRhEipgoFG8FGdD_6jnbsmuSUUJyMSMN8bhvonEa5GMNpQ-KIUCUeV_ApXlF7KRbIkA8x7ULNCBOP_FvP8ykGJmW94iEtdUtsDxQj0Uhwaqnkj1U2kYseGmvk7AyOoWC_Dj399h=w1364-h776-no',
    alt: 'World meteor map',
    link: 'https://codepen.io/Oddert/full/zjvaXZ/'
  },
  {
    title: 'Stock Market Tracker',
    description: 'A full-stack app to show historical and real time data for selected stocks, syncing the display options between users. \n This means that ass users add and remove stocks, everyone else will see the app update in real time. This could be used in meetings to let everyone see the same data on their individual devices. Live data is provided with websockets and data from IEX.',
    img: 'https://lh3.googleusercontent.com/c9XXcNJq0SBdM5Px2k8QDQI_eHqN9HKsddVJ9SZqe-SHbBvXgF1Rpr7-1cFNsS3l3v4hvgRUFjOWFFMv4fFfgmS8igqo54QmIEi5UK0PwdRkl8j2CzChUe7MhHoOaiVXU2uxLpX33SxuR7Hx7qQhmFMGYK7K7P6H35sa3qLu_xA1b_Pv1QNrC5dM1XCz5Wg8GGdepFykcBJHu8k-OMl4rypvfpOv6ZA3pxZQcog1BUadKs3FeVnn_Jf66SFYlYwrYcvE5_nExXA3oD7HD7z6xdCttpiQXRZW7F63tIVwq-aJiqMgu9H4SBc0psaupNFZU-Bf20ZHYr1eNdpk9TzBU8tfcVuMuppcRNhbdcVtXTcEu6ZZv36avymP6D4XvMtCeFbnSDlP0ZSZSTKhZlooVchCAA5qFr56MxZCyQwPVgt_ePDzUv2PUyK8lNqGNvVcYtOqmJ-YFhTmU3_8-95NJRrA1awnrwUY3ZRq_te8JIfgtXNqX1illqDW7Yz5kjZcun2k8MfvQwB6l2nTj0xCHJk4iW_CHxOtRvv7GGVD9GW4W5Lmc73T-sYLchi-uI_RQGfkFmnQWFrzL2GJ5jBu7PVUaV-e54qt1_tYVuZt=w1366-h702-no',
    alt: 'Stock market tracker',
    link: 'https://glitch.com/edit/#!/crimson-bandana?path=README.md:1:0'
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
