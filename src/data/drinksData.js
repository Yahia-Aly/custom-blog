const drinksData = [
    {
        name: "Cappuccino",
        description: "An espresso-based coffee drink that originated in Italy, traditionally prepared with steamed milk foam.",
        image: "https://plus.unsplash.com/premium_photo-1674327105280-b86494dfc690?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Italy",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 shot espresso", "100ml steamed milk", "50ml milk foam"],
            steps: [
                "Pull a shot of espresso",
                "Steam milk to create microfoam",
                "Pour steamed milk over espresso",
                "Top with milk foam",
                "Optional: dust with cocoa powder"
            ]
        },
        tastingNotes: ["Creamy", "Balanced", "Smooth", "Rich"],
        variations: ["Dry Cappuccino", "Wet Cappuccino", "Iced Cappuccino"]
    },
    {
        name: "Flat White",
        description: "A coffee drink consisting of espresso with microfoam (steamed milk with small, fine bubbles and a glossy or velvety consistency).",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxhdCUyMHdoaXRlfGVufDB8fDB8fHww",
        origin: "Australia/New Zealand",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 shots espresso", "150ml steamed milk"],
            steps: [
                "Pull two shots of espresso",
                "Steam milk to create microfoam",
                "Pour steamed milk over espresso",
                "Create latte art if desired"
            ]
        },
        tastingNotes: ["Smooth", "Velvety", "Balanced", "Creamy"],
        variations: ["Iced Flat White", "Long Flat White"]
    },
    {
        name: "Iced Coffee",
        description: "A cold version of your favorite coffee drink, perfect for hot summer days.",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Various",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 shots espresso", "200ml cold milk", "Ice cubes", "Simple syrup (optional)"],
            steps: [
                "Pull two shots of espresso",
                "Let espresso cool to room temperature",
                "Fill a glass with ice cubes",
                "Add cold milk",
                "Pour cooled espresso over ice",
                "Add simple syrup to taste",
                "Stir well and serve"
            ]
        },
        tastingNotes: ["Refreshing", "Cold", "Sweet", "Smooth"],
        variations: ["Vietnamese Iced Coffee", "Thai Iced Coffee", "Greek Frappé"]
    },
    {
        name: "Turkish Coffee",
        description: "A traditional method of preparing coffee where finely ground coffee beans are boiled in a pot.",
        image: "https://plus.unsplash.com/premium_photo-1732818135469-3bfc10ed83a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVya2lzaCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        origin: "Turkey",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 tsp finely ground coffee", "1 cup water", "Sugar (optional)"],
            steps: [
                "Add water to the cezve (special pot)",
                "Add coffee and sugar if desired",
                "Heat slowly until foam forms",
                "Remove from heat when foam rises",
                "Pour into small cups, including the grounds"
            ]
        },
        tastingNotes: ["Strong", "Thick", "Aromatic", "Traditional"],
        variations: ["Greek Coffee", "Armenian Coffee"]
    },
    {
        name: "Vietnamese Iced Coffee",
        description: "A traditional Vietnamese coffee recipe which uses dark roast coffee and sweetened condensed milk.",
        image: "https://images.unsplash.com/photo-1664515725366-e8328e9dc834?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Vietnam",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 tbsp ground coffee", "2 tbsp sweetened condensed milk", "Hot water", "Ice cubes"],
            steps: [
                "Add condensed milk to a glass",
                "Brew coffee using a Vietnamese coffee filter",
                "Stir coffee and condensed milk together",
                "Add ice cubes",
                "Serve with a spoon"
            ]
        },
        tastingNotes: ["Sweet", "Strong", "Creamy", "Unique"],
        variations: ["Hot Vietnamese Coffee", "Coconut Vietnamese Coffee"]
    },
    {
        name: "Affogato",
        description: "A simple Italian dessert that combines espresso with vanilla ice cream.",
        image: "https://plus.unsplash.com/premium_photo-1671559020860-5e8e7a05c4ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Italy",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 shot espresso", "1 scoop vanilla ice cream"],
            steps: [
                "Place a scoop of vanilla ice cream in a cup",
                "Pull a shot of espresso",
                "Pour hot espresso over the ice cream",
                "Serve immediately"
            ]
        },
        tastingNotes: ["Sweet", "Creamy", "Bittersweet", "Dessert-like"],
        variations: ["Chocolate Affogato", "Caramel Affogato"]
    },
    {
        name: "Café au Lait - French Latte eww",
        description: "A French coffee drink made with equal parts coffee and steamed milk.",
        image: "https://images.unsplash.com/photo-1733840592793-93fbd895d779?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "France",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 cup strong coffee", "1 cup steamed milk"],
            steps: [
                "Brew strong coffee",
                "Heat milk until steaming",
                "Pour equal parts coffee and milk into a cup",
                "Serve immediately"
            ]
        },
        tastingNotes: ["Mild", "Creamy", "Balanced", "Traditional"],
        variations: ["Café Crème", "Café Noisette"]
    },
    {
        name: "Mocha",
        description: "A chocolate-flavored variant of a latte.",
        image: "https://images.unsplash.com/photo-1662190679963-e50df4ecb9af?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "United States",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 shot espresso", "1 tbsp chocolate syrup", "200ml steamed milk", "Whipped cream (optional)"],
            steps: [
                "Add chocolate syrup to a cup",
                "Pull a shot of espresso",
                "Add steamed milk",
                "Top with whipped cream if desired",
                "Drizzle with additional chocolate syrup"
            ]
        },
        tastingNotes: ["Chocolatey", "Sweet", "Rich", "Indulgent"],
        variations: ["White Mocha", "Dark Mocha", "Mint Mocha"]
    },
    {
        name: "Cortado",
        description: "A Spanish coffee drink that cuts the espresso with a small amount of warm milk.",
        image: "https://images.unsplash.com/photo-1670217756837-34134e2e9e60?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Spain",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 shot espresso", "Equal part steamed milk"],
            steps: [
                "Pull a shot of espresso",
                "Steam an equal amount of milk",
                "Pour steamed milk over espresso",
                "Serve in a small glass"
            ]
        },
        tastingNotes: ["Balanced", "Smooth", "Mild", "Traditional"],
        variations: ["Gibraltar", "Piccolo Latte"]
    },
    {
        name: "Vienna Coffee",
        description: "A coffee drink topped with whipped cream instead of milk or foam.",
        image: "https://images.unsplash.com/photo-1664357141809-ceb54cce1b34?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Austria",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 shots espresso", "Whipped cream", "Chocolate shavings"],
            steps: [
                "Pull two shots of espresso",
                "Top with whipped cream",
                "Sprinkle with chocolate shavings",
                "Serve with a spoon"
            ]
        },
        tastingNotes: ["Creamy", "Sweet", "Indulgent", "Decadent"],
        variations: ["Einspänner", "Franziskaner"]
    },
    {
        name: "Café Cubano - uncreative image ma3lesh",
        description: "A type of espresso that originated in Cuba, sweetened with demerara sugar during brewing.",
        image: "https://images.unsplash.com/photo-1565273975703-c096791fd3ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Cuba",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 tbsp finely ground coffee", "2 tsp demerara sugar", "2 oz water"],
            steps: [
                "Add sugar to the portafilter",
                "Add ground coffee on top",
                "Tamp firmly",
                "Brew espresso",
                "The sugar will dissolve during brewing"
            ]
        },
        tastingNotes: ["Sweet", "Strong", "Caramel-like", "Traditional"],
        variations: ["Cortadito", "Café con Leche"]
    },
    {
        name: "Café Bombón",
        description: "A Spanish coffee drink made with equal parts espresso and sweetened condensed milk.",
        image: "https://www.theworktop.com/wp-content/uploads/2021/11/cafe-bombon-espresso-condensed-milk.jpg",
        origin: "Spain",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 shot espresso", "Equal part sweetened condensed milk"],
            steps: [
                "Pour condensed milk into a glass",
                "Pull a shot of espresso",
                "Pour espresso over the condensed milk",
                "Serve with a spoon"
            ]
        },
        tastingNotes: ["Sweet", "Creamy", "Rich", "Indulgent"],
        variations: ["Café Leche y Leche", "Café Asiático"]
    },
    {
        name: "Cold Brew",
        description: "A smooth, less acidic coffee made by steeping coarsely ground coffee beans in cold water for an extended period.",
        image: "https://images.unsplash.com/photo-1526650579294-8005820ec30a?q=80&w=2495&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "United States",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1 cup coarsely ground coffee", "4 cups cold water", "Ice cubes", "Milk (optional)"],
            steps: [
                "Combine coffee grounds and cold water in a jar",
                "Stir to ensure all grounds are wet",
                "Cover and refrigerate for 12-24 hours",
                "Strain through a fine-mesh sieve or coffee filter",
                "Serve over ice with milk if desired"
            ]
        },
        tastingNotes: ["Smooth", "Less acidic", "Sweet", "Refreshing"],
        variations: ["Nitro Cold Brew", "Cold Brew Latte", "Cold Brew Tonic"]
    },
    {
        name: "Café de Olla",
        description: "A traditional Mexican coffee drink brewed with cinnamon and piloncillo (unrefined cane sugar).",
        image: "https://lh3.ggpht.com/--RD8tbSgFJU/UKwxcaSF3AI/AAAAAAAAChM/b0hC6Wai0FY/Cafe-de-Olla1a_thumb8.jpg?imgmax=800",
        origin: "Mexico",
        isCaffeinated: true,
        recipe: {
            ingredients: ["4 cups water", "1/2 cup ground coffee", "1 cinnamon stick", "2 oz piloncillo or brown sugar"],
            steps: [
                "Bring water to a boil in a clay pot",
                "Add cinnamon stick and piloncillo",
                "Stir until sugar dissolves",
                "Add coffee grounds",
                "Simmer for 5 minutes",
                "Remove from heat and let steep for 5 minutes",
                "Strain and serve"
            ]
        },
        tastingNotes: ["Spiced", "Sweet", "Aromatic", "Traditional"],
        variations: ["Café de Olla with Chocolate", "Iced Café de Olla"]
    },
    {
        name: "Café Touba",
        description: "A Senegalese coffee drink flavored with djar (black pepper) and sometimes cloves.",
        image: "https://coffeevoila.com/wp-content/uploads/2025/03/How-to-Make-Cafe-Touba.jpg",
        origin: "Senegal",
        isCaffeinated: true,
        recipe: {
            ingredients: ["1/2 cup ground coffee", "1 tsp ground djar (black pepper)", "4 cups water", "Sugar to taste"],
            steps: [
                "Mix coffee grounds with djar",
                "Bring water to a boil",
                "Add coffee mixture",
                "Simmer for 5 minutes",
                "Strain through a fine cloth",
                "Add sugar to taste"
            ]
        },
        tastingNotes: ["Spicy", "Bold", "Aromatic", "Unique"],
        variations: ["Café Touba with Milk", "Café Touba with Cloves"]
    },
    {
        name: "Iced Mocha",
        description: "A refreshing cold version of the classic mocha, perfect for hot days.",
        image: "https://images.unsplash.com/photo-1596078841463-5504c992222f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "United States",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 shots espresso", "2 tbsp chocolate syrup", "200ml cold milk", "Ice cubes", "Whipped cream (optional)"],
            steps: [
                "Fill a glass with ice cubes",
                "Add chocolate syrup",
                "Pour cold milk over ice",
                "Add cooled espresso",
                "Top with whipped cream if desired",
                "Drizzle with additional chocolate syrup"
            ]
        },
        tastingNotes: ["Chocolatey", "Refreshing", "Sweet", "Creamy"],
        variations: ["Iced White Mocha", "Iced Dark Mocha", "Iced Mint Mocha"]
    },
    {
        name: "Iced Caramel Latte",
        description: "A sweet and creamy iced coffee drink with caramel flavor.",
        image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220629.iced_.latte_.caramel-9182.jpg",
        origin: "United States",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 shots espresso", "2 tbsp caramel syrup", "200ml cold milk", "Ice cubes", "Whipped cream (optional)"],
            steps: [
                "Fill a glass with ice cubes",
                "Add caramel syrup",
                "Pour cold milk over ice",
                "Add cooled espresso",
                "Top with whipped cream if desired",
                "Drizzle with additional caramel syrup"
            ]
        },
        tastingNotes: ["Sweet", "Creamy", "Caramel", "Refreshing"],
        variations: ["Iced Salted Caramel Latte", "Iced Caramel Macchiato"]
    },
    {
        name: "Qahwa Arabiya",
        description: "Traditional Arabic coffee, often flavored with cardamom and served in small cups.",
        image: "https://roastedcoffeehfx.com/wp-content/uploads/2022/02/Arabic-Coffee-300x300.jpg",
        origin: "Yemen/Gulf Countries Azon?",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 tbsp finely ground coffee", "2 cups water", "1 tsp ground cardamom", "Saffron (optional)"],
            steps: [
                "Bring water to a boil in a dallah (Arabic coffee pot)",
                "Add coffee and cardamom",
                "Let it boil for 2-3 minutes",
                "Remove from heat and let it settle",
                "Pour into small cups, leaving the grounds in the pot"
            ]
        },
        tastingNotes: ["Spiced", "Aromatic", "Traditional", "Light"],
        variations: ["Qahwa Hel", "Qahwa Mazboot"]
    },
    {
        name: "Iced Qahwa",
        description: "A refreshing cold version of traditional Arabic coffee.",
        image: "https://supreme-ingredients.com/wp-content/uploads/2020/04/DSC_9437-300x300-1-500x500.jpg",
        origin: "Middle East",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 cups strong Arabic coffee", "Ice cubes", "Cardamom", "Rose water (optional)"],
            steps: [
                "Brew strong Arabic coffee with cardamom",
                "Let it cool to room temperature",
                "Fill a glass with ice cubes",
                "Pour the cooled coffee over ice",
                "Add a splash of rose water if desired"
            ]
        },
        tastingNotes: ["Refreshing", "Spiced", "Traditional", "Light"],
        variations: ["Iced Qahwa with Milk", "Iced Qahwa with Dates"]
    },
    {
        name: "Iced Matcha",
        description: "A refreshing green tea-based drink with milk and ice.",
        image: "https://images.unsplash.com/photo-1717603547388-9a65828cb8c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        origin: "Japan",
        isCaffeinated: true,
        recipe: {
            ingredients: ["2 tsp matcha powder", "2 tbsp hot water", "200ml cold milk", "Ice cubes", "Sweetener (optional)"],
            steps: [
                "Mix matcha powder with hot water until smooth",
                "Fill a glass with ice cubes",
                "Add cold milk",
                "Pour matcha mixture over ice",
                "Add sweetener if desired",
                "Stir well and serve"
            ]
        },
        tastingNotes: ["Grassy", "Creamy", "Refreshing", "Earthy"],
        variations: ["Iced Matcha with Coconut Milk", "Iced Matcha with Vanilla"]
    }
];

export default drinksData; 