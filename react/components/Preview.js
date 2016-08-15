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
                }} />
              )
            })
          }
        </div>
      </div>
    );
  }
}
