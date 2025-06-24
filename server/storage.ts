import { menuItems, reservations, type MenuItem, type InsertMenuItem, type Reservation, type InsertReservation } from "@shared/schema";

export interface IStorage {
  // Menu Items
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  
  // Reservations
  getReservations(): Promise<Reservation[]>;
  getReservation(id: number): Promise<Reservation | undefined>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  updateReservationStatus(id: number, status: string): Promise<Reservation | undefined>;
}

export class MemStorage implements IStorage {
  private menuItems: Map<number, MenuItem>;
  private reservations: Map<number, Reservation>;
  private currentMenuId: number;
  private currentReservationId: number;

  constructor() {
    this.menuItems = new Map();
    this.reservations = new Map();
    this.currentMenuId = 1;
    this.currentReservationId = 1;
    
    // Initialize with sample menu items based on the design reference
    this.initializeMenuItems();
  }

  private initializeMenuItems() {
    const items: InsertMenuItem[] = [
      // Starters
      {
        name: "Chicken Samosa",
        description: "Crispy pastry filled with spiced chicken and vegetables",
        price: "5.95",
        category: "starters",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 2,
        isVegetarian: false,
        isPopular: true
      },
      {
        name: "Onion Bhaji",
        description: "Deep-fried onion fritters with Indian spices and herbs",
        price: "4.95",
        category: "starters",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: "Seekh Kebab",
        description: "Spiced minced lamb grilled on skewers in our tandoor",
        price: "6.95",
        category: "starters",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 3,
        isVegetarian: false
      },
      // Mains
      {
        name: "Chicken Tikka Masala",
        description: "Tender chicken pieces in a rich, creamy tomato-based sauce with aromatic spices",
        price: "12.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 2,
        isVegetarian: false,
        isPopular: true
      },
      {
        name: "Lamb Biryani",
        description: "Fragrant basmati rice layered with tender lamb and traditional spices",
        price: "15.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 3,
        isVegetarian: false,
        isPopular: true
      },
      {
        name: "Mixed Vegetable Curry",
        description: "Fresh seasonal vegetables cooked in authentic Indian spices and herbs",
        price: "9.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
        isPopular: true
      },
      {
        name: "Tandoori Chicken",
        description: "Marinated chicken grilled to perfection in our traditional tandoor oven",
        price: "11.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 3,
        isVegetarian: false
      },
      {
        name: "Butter Chicken",
        description: "Creamy tomato curry with tender chicken pieces, mild and flavorful",
        price: "13.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 1,
        isVegetarian: false,
        isPopular: true
      },
      // Bread & Rice
      {
        name: "Garlic Naan",
        description: "Freshly baked bread with garlic, herbs and butter from our tandoor oven",
        price: "3.50",
        category: "bread",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 1,
        isVegetarian: true,
        isPopular: true
      },
      {
        name: "Peshwari Naan",
        description: "Sweet naan stuffed with coconut, almonds and sultanas",
        price: "4.50",
        category: "bread",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 0,
        isVegetarian: true
      },
      {
        name: "Pilau Rice",
        description: "Fragrant basmati rice cooked with whole spices",
        price: "3.95",
        category: "rice",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true
      },
      // Desserts
      {
        name: "Gulab Jamun",
        description: "Traditional Indian dessert in sweet syrup, served warm",
        price: "4.95",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=300&auto=format&fit=crop",
        isVegetarian: true,
        isPopular: true
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream with cardamom and pistachios",
        price: "4.50",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&h=300&auto=format&fit=crop",
        isVegetarian: true
      },
      {
        name: "Aromatic Chicken Biryani",
        description: "Perfectly spiced chicken layered with saffron rice and aromatic herbs",
        price: "13.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=300&auto=format&fit=crop",
        spiceLevel: 3,
        isVegetarian: false,
        isPopular: true
      }
    ];

    items.forEach(item => this.createMenuItem(item));
  }

  // Menu Items methods
  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(item => item.category === category);
  }

  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentMenuId++;
    const item: MenuItem = { 
      ...insertItem, 
      id,
      spiceLevel: insertItem.spiceLevel || null,
      isVegetarian: insertItem.isVegetarian || false,
      isVegan: insertItem.isVegan || false,
      isGlutenFree: insertItem.isGlutenFree || false,
      isPopular: insertItem.isPopular || false
    };
    this.menuItems.set(id, item);
    return item;
  }

  // Reservations methods
  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async getReservation(id: number): Promise<Reservation | undefined> {
    return this.reservations.get(id);
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const reservation: Reservation = { 
      ...insertReservation, 
      id,
      status: "pending",
      createdAt: new Date(),
      comments: insertReservation.comments || null
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async updateReservationStatus(id: number, status: string): Promise<Reservation | undefined> {
    const reservation = this.reservations.get(id);
    if (reservation) {
      reservation.status = status;
      this.reservations.set(id, reservation);
    }
    return reservation;
  }
}

export const storage = new MemStorage();
