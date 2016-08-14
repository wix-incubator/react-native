const styles = {
  container: {
    display: 'inline-block',
    flexWrap: 'wrap',
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
  },

  button: {
    width: 40,
    height: 40,
  },

  image: {
    width: 207,

  }
}

// Define React Component
class Preview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSegment: props.segments[0]
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <img style={styles.image} src={this.state.selectedSegment.previewImage} />
        <div style={styles.buttonsContainer}>
          {
            _.map(this.props.segments, (segment) => {
              return (
                <img key={segment.key} style={styles.button} src={segment.button} onClick={() => {
                  this.setState({
                    selectedSegment: segment
                  })
                  this.render()
                }} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

// Mount React Component (which uses WebComponent which uses React)
var container = document.getElementById('preview-image');
const segments = [
  {
    key: 'Android',
    button: "http://camranger.com/wp-content/uploads/2014/10/Android-Icon.png",
    previewImage: "https://images.wondershare.com/images/mobile/mobilego/android-screenshot2.jpg",
  },
  {
    key: 'iOS',
    button: "https://www.hostmerchantservices.com/wp-content/uploads/2014/09/MetroUI-Folder-OS-OS-Apple-icon.png",
    previewImage: "https://static.wixstatic.com/media/713b90_b1f6ad9b00f745dabf827f7217ab777c~mv2.png/v1/fill/w_207,h_422,al_c,q_80,usm_0.66_1.00_0.01/713b90_b1f6ad9b00f745dabf827f7217ab777c~mv2.png",
  }
];
ReactDOM.render(<Preview segments={segments}/>, container);
