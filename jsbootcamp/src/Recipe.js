import React, { Component } from "react"
import { withStyles } from "@material-ui/styles"

const styles = {
   container: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      margin: "auto"
   },
   h1: {
      color: "red"
   },
   p: {
      color: "green",
      lineHeight: "0.25rem"
   },
   img: {
      width: "300px",
      alignSelf: "center",
      marginTop: "2rem",
      marginBottom: "2rem"
   },
   prep: {
      alignSelf: "start",
      marginLeft: "10rem",
      marginRight: "10rem",
      marginTop: "0.25rem",
      textAlign: "left"
   },
   div: {
      marginLeft: "19rem",
      textAlign: "left"
   }
}

class Recipe extends Component {

   render() {

      const { classes } = this.props

      const data = {
         "title": "Italian Dressing Chicken Breast",
         "description": "Great choice for the grill!",
         "website": "cravingtasty.com",
         "url": "https://cravingtasty.com/baked-italian-dressing-chicken-breasts/#wprm-recipe-container-12016",
         "image": "https://cravingtasty.com/wp-content/uploads/2016/11/Baked-Italian-Dressing-Chicken-Breasts-Recipe.jpg",
         "servings": "",
         "time": "5 minutes",
         "ingredients": [
            { "amount": "3 each", "ingredient": "chicken breasts" },
            { "amount": "1 cup", "ingredient": "Italian dressing" }
         ],
         "prep": [
            "Place the chicken breasts in a bowl, add the Italian dressing. Mix well, cover and marinate in a fridge for at least 30 minutes or overnight and up to 24 hours.",
            "Preheat oven to 350 degrees",
            "Transfer the chicken breasts and the marinade into a deep baking dish. Bake until the internal meat temperature reaches 160F, about 35-40 minutes at 375F (or 50-60 minutes at 325F). If you are using skin-on breasts, you may want to use the broiler mode in the last few minutes to crisp up the skins."
         ],
         "cooked": true,
         "cooked_date": [
            { "cooked_date": "2019-10-12", "notes": "Subnote number 1" },
            { "cooked_date": "2019-11-21", "notes": "Subnote number 2" }
         ],
         "notes": "",
         "keywords": [
            "Chicken",
            "Risotto",
            "Steak"
         ],
         "overall_notes": "Overall note number 1",
         "rating": 3.5
      }

      const ing = data.ingredients.map(i => <p className={classes.p}>{i.amount}: {i.ingredient}</p>)
      const cooked_date = data.cooked_date.map(c => <p className={classes.p}>{c.cooked_date}: {c.notes}</p>)
      const keywords = data.keywords.map(k => <p className={classes.p}>{k}</p>)
      const prep = data.prep.map(prep => <p className={classes.prep}>{prep}</p>)

      return (
         <div className={classes.container}>
            <h1 className={classes.h1}>Recipe: {data.title}</h1>
            <div className={classes.div}>
               {ing}
               {cooked_date}
               {keywords}
            </div>
            <img className={classes.img} src={data.image} alt="" />
            {prep}
         </div>
      )
   }
}

export default withStyles(styles)(Recipe)