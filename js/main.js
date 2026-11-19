// ! Variables

const recipes = [
  {
    imgUrl: "./images/margherita-pizza.png",
    rating: 4.8,
    reviews: 356,
    prepTime: 60,
    cookTime: 15,
    servings: "2 people",
    difficulty: "Beginner",
    cuisine: "Italian",
    title: "Margherita Pizza",
    description: "Classic Italian pizza with tomato sauce, mozzarella, and fresh basil",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "1/4 cup Parmesan cheese",
    ],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and Parmesan cheese.",
      "Drizzle with olive oil.",
      "Bake for 12-15 minutes until crust is golden.",
      "Top with fresh basil leaves.",
      "Slice and serve hot.",
    ],
    nutritionContent: {
      Calories: "320",
      Protein: "14",
      Carbohydrates: "38",
      Fat: "12",
      Fiber: "3",
      Sodium: "4",
    },
    chifeTips: [
      "Use fresh mozzarella for better flavor.",
      "Preheat the oven well before baking.",
      "Don't add too much sauce.",
      "Add basil after baking.",
      "Use a pizza stone if available.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/chicken-tikka-masala.png",
    rating: 4.9,
    reviews: 512,
    prepTime: 50,
    cookTime: 60,
    servings: "4 people",
    difficulty: "Intermediate",
    cuisine: "Indian",
    title: "Chicken Tikka Masala",
    description: "Tender chicken cooked in a creamy spiced tomato curry sauce",
    ingredients: [
      "1 lb chicken breast",
      "1 cup yogurt",
      "1 cup tomato sauce",
      "1/2 cup heavy cream",
      "1 onion",
      "3 cloves garlic",
      "1 tbsp garam masala",
      "2 tbsp butter",
    ],
    instructions: [
      "Cut chicken into bite-sized pieces.",
      "Marinate chicken with yogurt and spices for 20 minutes.",
      "Cook onion and garlic in butter until soft.",
      "Add chicken and cook until browned.",
      "Pour in tomato sauce and simmer for 20 minutes.",
      "Add heavy cream and stir well.",
      "Cook for another 10 minutes.",
      "Serve with rice or naan.",
    ],
    nutritionContent: {
      Calories: "420",
      Protein: "32",
      Carbohydrates: "18",
      Fat: "24",
      Fiber: "4",
      Sodium: "7",
    },
    chifeTips: [
      "Marinate the chicken for deeper flavor.",
      "Use fresh garlic and ginger if possible.",
      "Don't boil the cream too hard.",
      "Serve with basmati rice.",
      "Add chili powder for extra heat.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/beef-tacos.png",
    rating: 4.7,
    reviews: 289,
    prepTime: 15,
    cookTime: 50,
    servings: "3 people",
    difficulty: "Beginner",
    cuisine: "Mexican",
    title: "Beef Tacos",
    description: "Soft tacos filled with seasoned beef, vegetables, cheese, and avocado",
    ingredients: [
      "1 lb ground beef",
      "6 soft tortillas",
      "1 cup shredded lettuce",
      "1 tomato",
      "1 avocado",
      "1/2 cup shredded cheese",
      "1 tbsp taco seasoning",
      "1 lime",
    ],
    instructions: [
      "Cook ground beef in a pan until browned.",
      "Add taco seasoning and a little water.",
      "Simmer for 5 minutes.",
      "Warm tortillas in a pan.",
      "Fill tortillas with beef.",
      "Add lettuce, tomato, cheese, and avocado.",
      "Squeeze lime juice on top.",
      "Serve immediately.",
    ],
    nutritionContent: {
      Calories: "380",
      Protein: "24",
      Carbohydrates: "30",
      Fat: "18",
      Fiber: "6",
      Sodium: "3",
    },
    chifeTips: [
      "Warm tortillas before serving.",
      "Drain excess fat from the beef.",
      "Use fresh lime juice.",
      "Add salsa for more flavor.",
      "Don't overfill the tacos.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/salmon-teriyaki-bowl.png",
    rating: 4.8,
    reviews: 401,
    prepTime: 20,
    cookTime: 25,
    servings: "2 people",
    difficulty: "Intermediate",
    cuisine: "Japanese",
    title: "Salmon Teriyaki Bowl",
    description: "Glazed salmon served over rice with vegetables and sesame seeds",
    ingredients: [
      "2 salmon fillets",
      "2 cups cooked rice",
      "1 cup broccoli",
      "1/2 cup edamame",
      "1 carrot",
      "1 cucumber",
      "1/4 cup teriyaki sauce",
      "1 tbsp sesame seeds",
    ],
    instructions: [
      "Season salmon fillets with salt and pepper.",
      "Cook salmon in a pan for 4-5 minutes per side.",
      "Brush salmon with teriyaki sauce.",
      "Steam broccoli until tender.",
      "Slice cucumber and carrot.",
      "Add rice to serving bowls.",
      "Top with salmon and vegetables.",
      "Sprinkle sesame seeds before serving.",
    ],
    nutritionContent: {
      Calories: "520",
      Protein: "35",
      Carbohydrates: "55",
      Fat: "18",
      Fiber: "7",
      Sodium: "9",
    },
    chifeTips: [
      "Don't overcook the salmon.",
      "Use warm rice for serving.",
      "Brush sauce at the end to avoid burning.",
      "Add sesame oil for extra flavor.",
      "Serve immediately after cooking.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/vegetable-stir-fry.png",
    rating: 4.6,
    reviews: 245,
    prepTime: 15,
    cookTime: 20,
    servings: "3 people",
    difficulty: "Beginner",
    cuisine: "Asian",
    title: "Vegetable Stir-Fry",
    description: "Colorful vegetables tossed with noodles in a light savory sauce",
    ingredients: [
      "2 cups noodles",
      "1 cup broccoli",
      "1 red bell pepper",
      "1 yellow bell pepper",
      "1 carrot",
      "1 cup mushrooms",
      "1/4 cup soy sauce",
      "1 tbsp sesame oil",
    ],
    instructions: [
      "Cook noodles according to package directions.",
      "Slice all vegetables evenly.",
      "Heat sesame oil in a large pan.",
      "Add vegetables and stir-fry for 5-7 minutes.",
      "Add cooked noodles.",
      "Pour in soy sauce and toss well.",
      "Cook for another 3 minutes.",
      "Serve hot.",
    ],
    nutritionContent: {
      Calories: "300",
      Protein: "9",
      Carbohydrates: "48",
      Fat: "8",
      Fiber: "6",
      Sodium: "7",
    },
    chifeTips: [
      "Cut vegetables the same size.",
      "Cook on high heat.",
      "Don't overcrowd the pan.",
      "Keep vegetables slightly crunchy.",
      "Add sauce gradually.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },

  {
    imgUrl: "./images/chocolate-lava-cake.png",
    rating: 4.9,
    reviews: 623,
    prepTime: 15,
    cookTime: 12,
    servings: "2 people",
    difficulty: "Intermediate",
    cuisine: "French",
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a rich molten center served with berries",
    ingredients: [
      "1/2 cup dark chocolate",
      "1/4 cup butter",
      "1/4 cup Sodium",
      "2 eggs",
      "2 tbsp flour",
      "1 tsp vanilla extract",
      "Powdered Sodium",
      "Fresh berries",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Melt chocolate and butter together.",
      "Whisk eggs and Sodium until smooth.",
      "Add melted chocolate mixture.",
      "Fold in flour and vanilla extract.",
      "Pour batter into greased ramekins.",
      "Bake for 10-12 minutes.",
      "Dust with powdered Sodium and serve warm.",
    ],
    nutritionContent: {
      Calories: "430",
      Protein: "7",
      Carbohydrates: "42",
      Fat: "26",
      Fiber: "4",
      Sodium: "32",
    },
    chifeTips: [
      "Do not overbake the cake.",
      "Use high-quality dark chocolate.",
      "Grease ramekins well.",
      "Serve immediately while warm.",
      "Add ice cream for a better dessert.",
    ],
    over45min: function () {
      return this.prepTime > 45;
    },
  },
];

//!  Actions

// ! Function
function getRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);
  console.log(randomIndex);
  displayRecipe(randomIndex);
}

function displayRecipe(index) {
  var myRecipe = recipes[index];

  var imgContent = `
  <div class="photo-wrap position-relative overflow-hidden h-100" id="imageSection">
            <img
              id="recipeImage"
              class="w-100 h-100 object-fit-cover d-block"
              src="${myRecipe.imgUrl}"
              alt="${myRecipe.title}" />

            <div
              class="position-absolute top-0 start-0 m-4 px-4 py-2 bg-white rounded-pill shadow-lg d-flex align-items-center gap-2">
              <i class="fa-solid fa-star text-warning"></i>
              <span class="fw-semibold" id="ratingValue">${myRecipe.rating}</span>
              <span class="small text-body-secondary" id="ratingCount">(${myRecipe.reviews} reviews)</span>
            </div>

            <div class="facts-box position-absolute bottom-0 start-0 end-0 m-4 p-3 p-md-4 rounded-4 shadow-lg">
              <div class="row g-3 text-center">
                <div class="col-4">
                  <i class="fa-solid fa-clock fact-prep fs-4 mb-2 d-block mx-auto"></i>
                  <p class="small text-body-secondary mb-0">Prep Time</p>
                  <p class="fw-bold mb-0" id="prepTime">${myRecipe.prepTime} min</p>
                </div>
                <div class="col-4">
                  <i class="fa-solid fa-fire-burner fact-cook fs-4 mb-2 d-block mx-auto"></i>
                  <p class="small text-body-secondary mb-0">Cook Time</p>
                  <p class="fw-bold mb-0" id="cookTime">${myRecipe.cookTime} min</p>
                </div>
                <div class="col-4">
                  <i class="fa-solid fa-users fact-serve fs-4 mb-2 d-block mx-auto"></i>
                  <p class="small text-body-secondary mb-0">Servings</p>
                  <p class="fw-bold mb-0" id="servings">${myRecipe.servings}</p>
                </div>
              </div>
            </div>
          </div>
  `;

  var recipeInfo = `
  <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-4">
              <div>
                <div class="d-flex gap-2 mb-3">
                  <span class="pill pill-level badge rounded-pill fw-semibold px-3 py-1" id="levelPill"
                    >${myRecipe.difficulty}</span
                  >
                  <span class="pill pill-cuisine badge rounded-pill fw-semibold px-3 py-1" id="cuisinePill"
                    >${myRecipe.cuisine}</span
                  >
                </div>
                <h2 class="recipe-name fw-bold mb-2" id="recipeTitle">${myRecipe.title}</h2>
                <p class="recipe-desc text-body-secondary mb-0" id="recipeDesc">
                  ${myRecipe.description}
                </p>
              </div>

              <!-- Save + share buttons (above the text on mobile) -->
              <div class="d-flex gap-2 order-first order-md-last align-self-end align-self-md-center">
                <button
                  class="btn square-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                  type="button">
                  <i class="fa-solid fa-bookmark"></i>
                </button>
                <button
                  class="btn square-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                  type="button">
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>
  `;

  document.getElementById("photoSection").innerHTML = imgContent;
  document.getElementById("recipeHeader").innerHTML = recipeInfo;

  var timeWarning = document.getElementById("timeWarning");
  if (myRecipe.over45min()) {
    timeWarning.classList.remove("d-none");
  } else {
    timeWarning.classList.add("d-none");
  }

  var ingredientsHtml = "";
  for (var i = 0; i < myRecipe.ingredients.length; i++) {
    ingredientsHtml += `
      <li class="d-flex align-items-start mb-2">
        <span class="dot-num d-flex align-items-center justify-content-center rounded-circle text-white fw-bold flex-shrink-0 me-3">${i + 1}</span>
        <span class="small">${myRecipe.ingredients[i]}</span>
      </li>
    `;
  }
  document.getElementById("ingredientsList").innerHTML = ingredientsHtml;

  var instructionsHtml = "";
  for (var j = 0; j < myRecipe.instructions.length; j++) {
    instructionsHtml += `
      <li class="d-flex align-items-start mb-4">
        <span class="step-num d-flex align-items-center justify-content-center rounded-4 text-white fs-4 fw-bold flex-shrink-0 me-3">${j + 1}</span>
        <p class="flex-grow-1 pt-2 mb-0">${myRecipe.instructions[j]}</p>
      </li>
    `;
  }
  document.getElementById("instructionsList").innerHTML = instructionsHtml;

  var nutritionHtml = `
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-orange d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-fire"></i></span>
        <span class="fw-medium">Calories</span>
      </div>
      <span class="fs-5 fw-bold" id="caloriesValue">${myRecipe.nutritionContent.Calories} kcal</span>
    </div>
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-blue d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-dumbbell"></i></span>
        <span class="fw-medium">Protein</span>
      </div>
      <span class="fs-5 fw-bold" id="proteinValue">${myRecipe.nutritionContent.Protein}g</span>
    </div>
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-yellow d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-wheat-awn"></i></span>
        <span class="fw-medium">Carbohydrates</span>
      </div>
      <span class="fs-5 fw-bold" id="carbsValue">${myRecipe.nutritionContent.Carbohydrates}g</span>
    </div>
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-red d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-droplet"></i></span>
        <span class="fw-medium">Fat</span>
      </div>
      <span class="fs-5 fw-bold" id="fatValue">${myRecipe.nutritionContent.Fat}g</span>
    </div>
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-green d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-seedling"></i></span>
        <span class="fw-medium">Fiber</span>
      </div>
      <span class="fs-5 fw-bold" id="fiberValue">${myRecipe.nutritionContent.Fiber}g</span>
    </div>
    <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
      <div class="d-flex align-items-center">
        <span class="macro-icon macro-pink d-flex align-items-center justify-content-center rounded-3 me-3"><i class="fa-solid fa-cube"></i></span>
        <span class="fw-medium">Sodium</span>
      </div>
      <span class="fs-5 fw-bold" id="sodiumValue">${myRecipe.nutritionContent.Sodium}mg</span>
    </div>
  `;
  document.querySelector(".macro-grid").innerHTML = nutritionHtml;

  var tipsHtml = "";
  for (var k = 0; k < myRecipe.chifeTips.length; k++) {
    tipsHtml += `
      <div class="alert alert-warning d-flex align-items-start border-0 border-start border-4 mb-3" role="alert">
        <i class="fa-solid fa-circle-check fs-5 me-3 mt-1"></i>
        <p class="mb-0">${myRecipe.chifeTips[k]}</p>
      </div>
    `;
  }
  document.getElementById("tipsList").innerHTML = tipsHtml;
}

getRandomRecipe();

/**
           * <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4 mb-4">
              <div>
                <div class="d-flex gap-2 mb-3">
                  <span class="pill pill-level badge rounded-pill fw-semibold px-3 py-1" id="levelPill"
                    >Intermediate</span
                  >
                  <span class="pill pill-cuisine badge rounded-pill fw-semibold px-3 py-1" id="cuisinePill"
                    >Italian</span
                  >
                </div>
                <h2 class="recipe-name fw-bold mb-2" id="recipeTitle">Margherita Pizza</h2>
                <p class="recipe-desc text-body-secondary mb-0" id="recipeDesc">
                  Classic Italian pizza with fresh mozzarella and basil
                </p>
              </div>

              <!-- Save + share buttons (above the text on mobile) -->
              <div class="d-flex gap-2 order-first order-md-last align-self-end align-self-md-center">
                <button
                  class="btn square-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                  type="button">
                  <i class="fa-solid fa-bookmark"></i>
                </button>
                <button
                  class="btn square-btn d-flex align-items-center justify-content-center border-0 rounded-3"
                  type="button">
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
              </div>
            </div>





            <li class="d-flex align-items-start mb-2">
                    <span
                      class="dot-num d-flex align-items-center justify-content-center rounded-circle text-white fw-bold flex-shrink-0 me-3"
                      >1</span
                    >
                    <span class="small">300g pizza dough</span>
                  </li>





                  <li class="d-flex align-items-start mb-4">
                  <span
                    class="step-num d-flex align-items-center justify-content-center rounded-4 text-white fs-4 fw-bold flex-shrink-0 me-3"
                    >1</span
                  >
                  <p class="flex-grow-1 pt-2 mb-0">Preheat the oven to 250°C (480°F) with a pizza stone inside.</p>
                </li>


                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span
                      class="macro-icon macro-orange d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-fire"></i
                    ></span>
                    <span class="fw-medium">Calories</span>
                  </div>
                  <span class="fs-5 fw-bold" id="caloriesValue">650 kcal</span>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span class="macro-icon macro-blue d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-dumbbell"></i
                    ></span>
                    <span class="fw-medium">Protein</span>
                  </div>
                  <span class="fs-5 fw-bold" id="proteinValue">28g</span>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span
                      class="macro-icon macro-yellow d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-wheat-awn"></i
                    ></span>
                    <span class="fw-medium">Carbohydrates</span>
                  </div>
                  <span class="fs-5 fw-bold" id="carbsValue">78g</span>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span class="macro-icon macro-red d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-droplet"></i
                    ></span>
                    <span class="fw-medium">Fat</span>
                  </div>
                  <span class="fs-5 fw-bold" id="fatValue">24g</span>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span class="macro-icon macro-green d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-seedling"></i
                    ></span>
                    <span class="fw-medium">Fiber</span>
                  </div>
                  <span class="fs-5 fw-bold" id="fiberValue">4g</span>
                </div>
                <div class="d-flex align-items-center justify-content-between p-3 rounded-4 bg-light">
                  <div class="d-flex align-items-center">
                    <span class="macro-icon macro-pink d-flex align-items-center justify-content-center rounded-3 me-3"
                      ><i class="fa-solid fa-cube"></i
                    ></span>
                    <span class="fw-medium">Sodium</span>
                  </div>
                  <span class="fs-5 fw-bold" id="sodiumValue">1100mg</span>
                </div>





                <div
                  class="alert alert-warning d-flex align-items-start border-0 border-start border-4 mb-3"
                  role="alert">
                  <i class="fa-solid fa-circle-check fs-5 me-3 mt-1"></i>
                  <p class="mb-0">Use a pizza stone for crispier crust</p>
                </div>
           */
