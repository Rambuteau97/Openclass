import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Button } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm() {
    const { film } = this.state
      if (film != undefined) {
        return (
          <ScrollView style={styles.scrollview_container}>
            <Image
            style={styles.image}
            source={{uri: getImageFromApi(film.backdrop_path)}}
            />
            <Text>{this.state.film.title}</Text>
            <Button title= 'Titre du film' onPress={()=>this._toggleFavorite()}/>
          </ScrollView>
        )
      }
  }

  _toggleFavorite() {

  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
  favoritesFilm: state.favoritesFilm//On associe la liste des films favoris
  }
}
//Dès que le store et le state de l'application vont être mis à jour par
// nos actions, automatiquement, notre component va être informé de ce changement. 

export default connect(mapStateToProps)(FilmDetail)
//On connecte le state de l'application avec les props du component FilmDetail.