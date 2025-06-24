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
      {
        name: "Chicken Tikka Masala",
        description: "Tender chicken pieces in a rich, creamy tomato-based sauce with aromatic spices",
        price: "12.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 2,
        isVegetarian: false,
        isPopular: true
      },
      {
        name: "Lamb Biryani",
        description: "Fragrant basmati rice layered with tender lamb and traditional spices",
        price: "14.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1563379091068-d4a49fa7d45f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 3,
        isVegetarian: false,
        isPopular: true
      },
      {
        name: "Mixed Vegetable Curry",
        description: "Fresh seasonal vegetables cooked in authentic Indian spices and herbs",
        price: "9.95",
        category: "mains",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
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
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 3,
        isVegetarian: false
      },
      {
        name: "Garlic Naan",
        description: "Freshly baked bread with garlic, herbs and butter from our tandoor oven",
        price: "3.50",
        category: "bread",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 1,
        isVegetarian: true
      },
      {
        name: "Gulab Jamun",
        description: "Traditional Indian dessert in sweet syrup, served warm",
        price: "4.95",
        category: "desserts",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        isVegetarian: true
      },
      {
        name: "Chicken Samosa",
        description: "Crispy pastry filled with spiced chicken and vegetables",
        price: "6.95",
        category: "starters",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 2,
        isVegetarian: false
      },
      {
        name: "Onion Bhaji",
        description: "Deep-fried onion fritters with Indian spices and herbs",
        price: "5.95",
        category: "starters",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true
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
      createdAt: new Date()
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
