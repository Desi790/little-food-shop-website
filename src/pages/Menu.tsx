import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/ui/hero-section";
import SectionHeading from "@/components/ui/section-heading";
import FoodCard from "@/components/ui/food-card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

// Mock food data for our menu
const menuItems = [
  {
    id: "1",
    name: "Homestyle Lasagna",
    description: "Layers of pasta, rich meat sauce, and three cheeses, baked to perfection.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2835&auto=format&fit=crop",
    category: "Mains",
    dietary: ["Contains Dairy", "Contains Gluten"]
  },
  {
    id: "2",
    name: "Mediterranean Salad",
    description: "Fresh greens with feta cheese, olives, cucumbers, and our house dressing.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=3384&auto=format&fit=crop",
    category: "Salads",
    dietary: ["Vegetarian", "Gluten-Free"]
  },
  {
    id: "3",
    name: "Classic Tiramisu",
    description: "Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2787&auto=format&fit=crop",
    category: "Desserts",
    dietary: ["Vegetarian", "Contains Dairy"]
  },
  {
    id: "4",
    name: "Chicken Alfredo",
    description: "Grilled chicken breast with creamy alfredo sauce over fettuccine pasta.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=3024&auto=format&fit=crop",
    category: "Mains",
    dietary: ["Contains Dairy", "Contains Gluten"]
  },
  {
    id: "5",
    name: "Vegetable Stir Fry",
    description: "Fresh seasonal vegetables stir-fried with our special sauce and served with rice.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop",
    category: "Mains",
    dietary: ["Vegan", "Gluten-Free"]
  },
  {
    id: "6",
    name: "Chocolate Brownie",
    description: "Rich, fudgy chocolate brownie served with a scoop of vanilla ice cream.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2874&auto=format&fit=crop",
    category: "Desserts",
    dietary: ["Vegetarian", "Contains Dairy", "Contains Gluten"]
  },
  {
    id: "7",
    name: "Greek Yogurt Parfait",
    description: "Creamy Greek yogurt layered with fresh berries and homemade granola.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=3000&auto=format&fit=crop",
    category: "Breakfast",
    dietary: ["Vegetarian", "Contains Dairy"]
  },
  {
    id: "8",
    name: "Avocado Toast",
    description: "Sourdough toast topped with mashed avocado, cherry tomatoes, and microgreens.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1603046891744-76e6481cf539?q=80&w=3087&auto=format&fit=crop",
    category: "Breakfast",
    dietary: ["Vegetarian", "Contains Gluten"]
  },
  {
    id: "9",
    name: "Quinoa Bowl",
    description: "Protein-packed quinoa with roasted vegetables, chickpeas, and tahini dressing.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=3024&auto=format&fit=crop",
    category: "Salads",
    dietary: ["Vegan", "Gluten-Free"]
  }
];

const categories = ["All", "Breakfast", "Mains", "Salads", "Desserts"];
const dietaryOptions = ["Vegetarian", "Vegan", "Gluten-Free", "Contains Dairy"];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Filter menu items based on search, category and dietary preferences
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    // Check dietary filters
    const matchesDietary = dietaryFilters.length === 0 || 
                          dietaryFilters.every(filter => item.dietary?.includes(filter));
    
    return matchesSearch && matchesCategory && matchesDietary;
  });

  // Sort the filtered items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    } else if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0; // Default - as is in the array
  });

  const handleDietaryFilterChange = (filter: string) => {
    setDietaryFilters(current => 
      current.includes(filter)
        ? current.filter(f => f !== filter)
        : [...current, filter]
    );
  };

  return (
    <Layout>
      <HeroSection 
        title="Our Menu" 
        subtitle="Explore our selection of delicious, homemade meals prepared daily by our expert chefs."
        image="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=4221&auto=format&fit=crop"
        imageAlt="Assortment of delicious food items from our menu"
      />
      
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Explore Our Meals" 
            subtitle="Filter by category, dietary preferences, or search for your favorites"
          />
          
          {/* Search and filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search our menu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={selectedCategory} 
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category" className="mt-1">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="sort">Sort By</Label>
                <Select 
                  value={sortOption} 
                  onValueChange={setSortOption}
                >
                  <SelectTrigger id="sort" className="mt-1">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A-Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Dietary Preferences</Label>
              <div className="flex flex-wrap gap-6">
                {dietaryOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox 
                      id={option} 
                      checked={dietaryFilters.includes(option)}
                      onCheckedChange={() => handleDietaryFilterChange(option)}
                    />
                    <label
                      htmlFor={option}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Menu items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <FoodCard 
                  key={item.id} 
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  category={item.category}
                  dietary={item.dietary}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-xl text-gray-600">No items match your filters. Please try different criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
