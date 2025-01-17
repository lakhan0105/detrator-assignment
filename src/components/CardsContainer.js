import { Grid2 } from "@mui/material";
import React from "react";
import SingleCard from "./SingleCard";

function CardsContainer() {
  const travelLocations = [
    {
      id: 1,
      title: "Taj Mahal - A Timeless Symbol of Mughal Grandeur",
      address: "Agra, UP",
      distance: "5 km",
      attractions: "Marble Tomb, Gardens",
      nearbySpots: "Agra Fort",
      other:
        "The Taj Mahal is famous for its stunning Mughal architecture and romantic history.",
      price: "₹50",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1637823370891-7dc8a00f64f9?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Historical",
    },
    {
      id: 2,
      title: "Jaipur Palace - A Royal Marvel of Rajasthan Heritage",
      address: "Jaipur, RJ",
      distance: "2 km",
      attractions: "Courtyards, Royal Museum",
      nearbySpots: "Amber Fort",
      other:
        "The Jaipur Palace is an royal residence showcasing Rajasthani art and cultural heritage",
      price: "₹100",
      rating: 4.7,
      img: "https://plus.unsplash.com/premium_photo-1661963054563-ce928e477ff3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Cultural",
    },
    {
      id: 3,
      title: "Gateway of India - Mumbai's Iconic Seafront Landmark",
      address: "Mumbai, MH",
      distance: "3 km",
      attractions: "Sea Views, Colonial Design",
      nearbySpots: "Elephanta Caves",
      other:
        "The Gateway of India is an iconic archway built during the British era and a popular spot for tourists and locals alike.",
      price: "Free",
      rating: 4.6,
      img: "https://plus.unsplash.com/premium_photo-1694475160399-aa6d3eb585a2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Landmark",
    },
    {
      id: 4,
      title: "Mysore Palace - A Testament to Karnataka's Royal Legacy",
      address: "Mysore, KA",
      distance: "1 km",
      attractions: "Light Show, Artifacts",
      nearbySpots: "Chamundi Hills",
      other:
        "The Mysore Palace is a magnificent royal structure known for its grand architecture and cultural heritage.",
      price: "₹70",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1657856855186-7cf4909a4f78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Historical",
    },
    {
      id: 5,
      title: "Charminar - The Iconic Monument of Hyderabad",
      address: "Hyderabad, TS",
      distance: "2 km",
      attractions: "Local Bazaars, Arches",
      nearbySpots: "Mecca Masjid",
      other:
        "The Charminar is a historic structure that symbolizes the city of Hyderabad, famous for its architecture and bustling market.",
      price: "₹20",
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1694091684549-b1188cb03a4b?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Monument",
    },
    {
      id: 6,
      title: "Marine Drive - The Queen's Necklace of Mumbai",
      address: "Mumbai, MH",
      distance: "1 km",
      attractions: "Sea Breeze, Sunset Views",
      nearbySpots: "Chowpatty Beach",
      other:
        "Marine Drive is a picturesque promenade offering a panoramic view of the sea and the city’s skyline, especially at night.",
      price: "Free",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1550235438-aa60f4d77517?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Scenic",
    },
    {
      id: 7,
      title: "Hawa Mahal - Jaipur's Palace of Winds",
      address: "Jaipur, RJ",
      distance: "3 km",
      attractions: "Pink Walls, Tiny Windows",
      nearbySpots: "City Palace",
      other:
        "The Hawa Mahal is a unique structure with 953 windows, built for royal women to view street activities without being seen.",
      price: "₹50",
      rating: 4.6,
      img: "https://plus.unsplash.com/premium_photo-1661901647310-4deafc6f29a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Cultural",
    },
    {
      id: 8,
      title: "Ellora Caves - An Ancient Wonder of Rock-Cut Temples",
      address: "Aurangabad, MH",
      distance: "5 km",
      attractions: "Rock Temples, Sculptures",
      nearbySpots: "Ajanta Caves",
      other:
        "The Ellora Caves are UNESCO-listed and showcase an impressive fusion of Hindu, Buddhist, and Jain monuments.",
      price: "₹40",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1631774933370-d596a344e851?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Heritage",
    },
  ];

  return (
    <Grid2
      sx={{
        width: { sm: "100%", md: "70%" },
      }}
    >
      {travelLocations.map((item) => {
        return <SingleCard key={item.id} {...item} />;
      })}
    </Grid2>
  );
}

export default CardsContainer;
