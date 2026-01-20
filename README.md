2D Minecraft (Vanilla JavaScript)

built using 
**HTML, CSS, and Vanilla JavaScript DOM**.  
The game focuses on: 
**breaking blocks, collecting resources, and building** —
using **DOM manipulation** and clean game state management.

---
### Menu
- Start menu with Minecraft-style button
- Game loads only after clicking **Start Game**

### World
- 2D tile-based world rendered using CSS Grid
- Procedurally generated terrain (sky, grass, dirt, rock)
- Trees with trunks and leaves and Flowers
- Diamond ores (multiple colors) generated underground
- Responsive world size based on screen size

### Tools
- **Axe**: breaks wood & leaves  
- **Pickaxe**: breaks rock & diamond ores  
- **Shovel**: breaks dirt, grass, and flowers  
- Tool selection via a **Minecraft-style hotbar**
- Active tool highlight
- Tool swing animation

### Inventory
- Inventory stores **block counts** like Minecraft
- Click an inventory item to enter **Build Mode**
- Inventory updates dynamically based on game actions

### Build Mode
- Place collected blocks back into the world
- Build only on empty (sky) tiles
- Automatically exits tool mode when building

### Breaking
- Faster, satisfying block break timing

---

How to Run
git clone https://github.com/your-username/minecraft-2d.git
