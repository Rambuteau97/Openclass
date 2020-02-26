import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'

class Favorite extends React.Component {

  _searchTextInputChanged(text) {
    this.searchedText = text 
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.favoritesFilm}
          keyExtractor={(item) => item.id.toString()}
          favoriteList={true}
          renderItem={({item}) => (
            <FilmItem
              film={item}
              isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.props.page < this.props.totalPages) {
              // On appelle la méthode loadFilm du component Search pour charger plus de films
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

  const mapStateToProps = (state) => {
      return {
        favoritesFilm: state.favoritesFilm
      }
  }

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})




export default connect(mapStateToProps)(Favorite)