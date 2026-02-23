## Job Notification App – Design System Foundation

This repository currently contains the **design system foundation** for a serious B2C Job Notification App. It does **not** implement product features yet; it focuses only on structure, tokens, and core UI patterns.

### Design Philosophy

- **Calm**: restrained color, generous whitespace, minimal visual noise.  
- **Intentional**: every spacing, size, and alignment value comes from a fixed scale.  
- **Coherent**: shared tokens drive colors, typography, and radii.  
- **Confident**: large, serif headlines; clean sans-serif body copy; no playful or experimental effects.

No gradients, glassmorphism, neon colors, or bouncy animations are used.

### Files

- **`src/styles/tokens.css`**: design tokens for color, typography, spacing, radius, and transitions.  
- **`src/styles/components.css`**: base layout shell and reusable components (top bar, context header, workspace layout, buttons, inputs, cards, states, proof footer).  
- **`src/index.html`**: reference page showing how to compose the shell and core components together.

You can open `src/index.html` directly in a browser to review the system.

### Color System (Conceptual)

- **Background**: `#F7F6F3` (off‑white, not pure white)  
- **Primary text**: `#111111`  
- **Accent**: `#8B0000` (deep red)  
- **Success (muted green)**: used sparingly for positive status and checkmarks.  
- **Warning (muted amber)**: used sparingly for “in progress” or caution status.

The palette is intentionally tight: one neutral family (background/text) plus three semantic families (accent red, muted green, muted amber). No additional brand hues are introduced.

### Typography

- **Headings**: serif (`var(--font-serif)`), large, with generous spacing.  
- **Body**: clean sans-serif (`var(--font-sans)`), 16–18px.  
- **Line-height**: body text between 1.6 and 1.8.  
- **Max text width**: 720px for long-form blocks.

The type scale is small and deliberate—no arbitrary one-off sizes.

### Spacing System

Only these spacing values are allowed for layout:

- `8px`, `16px`, `24px`, `40px`, `64px`

They are exposed as CSS variables and are the only values used for **margin**, **padding**, and **gap**.

### Global Layout Structure

Every page is structured as:

1. **Top Bar**  
2. **Context Header**  
3. **Primary Workspace (70%) + Secondary Panel (30%)**  
4. **Proof Footer**

`src/index.html` demonstrates this structure using:

- **Top Bar**: app name (left), progress indicator (center), status badge (right).  
- **Context Header**: large serif headline, one-line subtext, clear purpose.  
- **Primary Workspace**: card-based layout with subtle borders and predictable components.  
- **Secondary Panel**: step explanation, copyable prompt box, consistent buttons.  
- **Proof Footer**: checklist:
  - □ UI Built  
  - □ Logic Working  
  - □ Test Passed  
  - □ Deployed

### Component Rules (Implemented in CSS)

- **Primary button**: solid deep red (`#8B0000`).  
- **Secondary button**: outlined, same radius and typography as primary.  
- **Border radius**: one shared radius token used for buttons, inputs, cards, and badges.  
- **Inputs**: clean borders, clear accent-colored focus state (no glow).  
- **Cards**: subtle border, no drop shadows, calm background.

### Interaction Rules

- **Transitions**: 150–200ms with `ease-in-out`.  
- **No bounce or parallax**.  
- Hover and focus use only small changes in color and border; no movement-based effects.

### Error & Empty States

Patterns (styled in `components.css`):

- **Error states**:
  - Clearly explain what went wrong.  
  - Indicate how to fix it or what to do next.  
  - Never blame the user.
- **Empty states**:
  - Never leave a blank screen.  
  - Guide the next action (e.g., what to set up, what to connect).

These are expressed as reusable “callout” blocks so they are visually consistent across the app.

### How to Use This Design System

- Start from the structure in `src/index.html`.  
- Use only tokens from `tokens.css` for:
  - Colors  
  - Typography  
  - Spacing  
  - Radius  
  - Transitions
- Compose new screens from the existing layout shell and components instead of inventing new one-off patterns.

