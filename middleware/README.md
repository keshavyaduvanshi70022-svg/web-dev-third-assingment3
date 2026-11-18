# Inventory and Data Management System

**Course:** Web Dev III  
**Assignment:** 3 – Inventory and Data Management System  
**Technology:** Node.js, Express.js, MongoDB, Mongoose, dotenv

## Features
- Mongoose product schema with field-level validation and unique SKU
- Create, read, update and delete product APIs
- Filtering by category, search term and price range
- Sorting and pagination
- Atomic stock adjustment (restock/sale)
- Low-stock alert report
- Category-wise inventory summary using MongoDB aggregation
- Centralized error handling and environment variables

## Setup
1. Install Node.js and start MongoDB (local MongoDB or Atlas).
2. Open this project folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env`.
5. Set `MONGO_URI` in `.env` to your MongoDB connection string.
6. Run `npm run dev` (or `npm start`).
7. The API runs at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/products` | Create product |
| GET | `/api/products` | List, filter, sort and paginate |
| GET | `/api/products/:id` | Get one product |
| PUT | `/api/products/:id` | Update product details |
| DELETE | `/api/products/:id` | Delete product |
| PATCH | `/api/products/:id/stock` | Increase/decrease stock |
| GET | `/api/products/low-stock` | Low-stock report |
| GET | `/api/products/summary` | Category-wise aggregation |

### Create product body
```json
{
  "name": "Gel Pen Pack of 15",
  "sku": "STNY-PN-713",
  "category": "Stationery",
  "price": 120,
  "quantity": 40,
  "reorderLevel": 20,
  "supplier": "Cello Pens"
}
```

### Filter, sort and pagination examples
- `GET /api/products?category=Stationery`
- `GET /api/products?search=pen`
- `GET /api/products?minPrice=50&maxPrice=500`
- `GET /api/products?sort=price&order=asc`
- `GET /api/products?page=1&limit=10`

### Stock adjustment body
Positive `change` adds stock; negative `change` records a sale.
```json
{ "change": 10 }
```

## Postman Testing
Import `postman/Inventory_API.postman_collection.json` into Postman. Run requests in order. The collection stores the created product ID automatically for later requests.

## Required Postman screenshots
After running the requests successfully, save genuine Postman response screenshots in `screenshots/` and add them below. Do not use sample or fabricated output screenshots.

- Create product: `screenshots/create-product.png`
- Get all products: `screenshots/get-products.png`
- Get product by ID: `screenshots/get-product-by-id.png`
- Update product: `screenshots/update-product.png`
- Stock adjustment: `screenshots/stock-adjustment.png`
- Delete product: `screenshots/delete-product.png`
- Low-stock report: `screenshots/low-stock.png`
- Category summary: `screenshots/category-summary.png`

### Postman Output Screenshots
<!-- Add screenshots here after testing. Example: ![Create Product](screenshots/create-product.png) -->

## Notes
- Never upload your `.env` file or MongoDB password to GitHub.
- Use your own screenshots from your running server and Postman before submission.
