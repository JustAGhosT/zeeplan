# Zeeplan - Zeerust Regenerative Agriculture Partnership

This repository contains the comprehensive business partnership proposal for a regenerative agriculture venture in Zeerust, North West Province, South Africa.

## 🌐 Live Application

**View the interactive business plan:** [https://zeeplan.netlify.app/](https://zeeplan.netlify.app/) _(if deployed)_

The web application provides an interactive interface for exploring the partnership proposal, financial projections, and enterprise plans.

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Documents](#-documents)
- [Key Highlights](#-key-highlights)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Repository Structure](#-repository-structure)
- [Integration with Farm Business Plan](#-integration-with-farm-business-plan)
- [Next Steps](#-next-steps)
- [Version History](#-version-history)
- [Contact](#-contact)

## About the Project

Zeeplan is a comprehensive regenerative agriculture partnership proposal that transforms traditional cattle farming into a diversified, sustainable operation. The project outlines a zero-cash entry, performance-based sweat equity partnership between family landowners and a farm management partner, with detailed financial projections and implementation strategies.

**Key Features:**
- Interactive web application built with Next.js and TypeScript
- Detailed enterprise plans for cattle, goats, pigs, chickens, and crops
- Comprehensive financial modeling and projections
- Sekelbos clearance strategy with biological methods
- 5-year transformation roadmap

## 📄 Documents

All business plan and documentation files are located in the `/docs` directory:

### 1. **docs/Zeerust_Partnership_Proposal_v4.0.md** (Full Master Plan)

The complete partnership proposal including:

- Executive Summary
- Current State Analysis
- 5-Year Transformation Plan
- Financial Projections & ROI Analysis
- Partnership Structure & Negotiation Strategy
- Hans's Role & Responsibilities
- Risk Analysis & Mitigation
- Implementation Roadmap
- Exit Strategy & Long-Term Vision
- Critical Success Factors
- Next Steps & Decision Points
- Appendices

### 2. **docs/Executive_Summary.md** (One-Page Overview)

A concise summary suitable for initial presentations and quick reference.

## 📊 Key Highlights

**Partnership Type:** Zero-cash entry, performance-based sweat equity partnership

**Current State:**

- 600 hectares Bushveld farmland
- 72 LSU cattle (current stocking)
- R233K-297K/year baseline revenue
- 60-80% sekelbos encroachment

**Proposed Transformation:**

- 5-year regenerative agriculture plan
- Increase to 104 LSU capacity (+44%)
- Diversify to 8+ revenue streams
- Target: R1.13M-1.78M revenue by Year 5

**Partnership Structure:**

- Oom Hein: 35% (land + operations)
- Eben: 35% (infrastructure + family)
- Hans: 30% (sweat equity + livestock)

**Hans's Investment:**

- R48K-98K livestock (pigs, goats, chickens)
- R0 cash
- Pure sweat equity (systems, planning, marketing)

**Hans's 5-Year Returns:**

- R995K-1.78M total income
- 1,870-3,400% ROI
- Average R199K-356K/year

## 🎯 Performance-Based Equity

| Year     | Hans Equity | Target Revenue | Income              |
| -------- | ----------- | -------------- | ------------------- |
| Year 1   | 0%          | R340K+         | R120K-180K (salary) |
| Year 2   | 15%         | R544K+         | R154K-263K          |
| Year 3   | 22.5%       | R752K+         | R195K-369K          |
| Year 4-5 | 30%         | R943K-1.13M+   | R247K-498K          |

## 🌱 Core Strategy

1. **Sekelbos Clearing:** 50ha/year → +R40K-410K/year revenue + capacity expansion
2. **Diversification:** Cattle, goats (meat + dairy), pigs, chickens, crops, wood products
3. **Systems Implementation:** Financial tracking, production optimization, KPI management
4. **Marketing & Branding:** Direct-to-consumer, premium pricing, farm shop
5. **Operational Excellence:** Process optimization, cost savings, strategic planning

## 📈 Win-Win-Win Outcome

All partners benefit from the transformation:

- **Oom Hein:** R210K-245K → R618K-1.41M (5-year total) = +194-476% growth
- **Eben:** R210K-245K → R618K-1.41M (5-year total) = +194-476% growth
- **Hans:** R0 → R995K-1.78M (5-year total) with zero cash investment

## 🛡️ Risk Protection

- Year 1 zero equity (prove-it phase)
- Family maintains 70% control (35% + 35%)
- Performance-based milestones
- Clear exit clauses (Year 3 or Year 5)
- Downside protection via management salary

## 📞 Next Steps

1. Review the full Master Plan (docs/Zeerust_Partnership_Proposal_v4.0.md)
2. Review the Executive Summary (docs/Executive_Summary.md) for quick reference
3. Schedule meeting with Oom Hein + Eben
4. Conduct land valuation and infrastructure audit
5. Draft partnership agreement
6. Begin Year 1 implementation

## 📝 Version History

- **v4.0** (Nov 7, 2025): Updated to 35%/35%/30% equity split, phased earn-in, NO HANS CASH, family farm context
- **v3.0** (Nov 7, 2025): Revised to reflect Hans entering from 0% equity
- **v2.0** (Nov 7, 2025): Updated with real baseline data (72 LSU current stocking)
- **v1.0** (Nov 6, 2025): Initial draft with estimated baseline

## 📂 Repository Structure

```
zeeplan/
├── app/                    # Next.js application pages and routes
│   ├── cattle/            # Cattle enterprise page
│   ├── chicken/           # Chicken enterprise page
│   ├── crops/             # Crop production pages
│   ├── financials/        # Financial projections page
│   ├── goats/             # Goat dairy enterprise page
│   ├── livestock/         # General livestock page
│   ├── operations/        # Operations dashboard
│   ├── pigs/              # Pig enterprise page
│   ├── proposal/          # Full proposal page
│   ├── sekelbos/          # Sekelbos clearance plan page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── ...                # Additional UI components
├── docs/                  # Business plan and documentation files
│   ├── Zeerust_Partnership_Proposal_v4.0.md
│   ├── Executive_Summary.md
│   ├── Cattle_Enterprise_Plan.md
│   ├── Goat_Dairy_Chevre_Plan.md
│   ├── Pig_Enterprise_Plan.md
│   ├── Chicken_Enterprise_Plan.md
│   └── DEPLOYMENT.md
├── data/                  # Financial data and JSON files
├── lib/                   # Shared utilities and helper functions
├── __mocks__/             # Test mocks
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.mjs        # Next.js configuration
└── README.md              # This file
```

## 🛠 Technology Stack

This project is built with modern web technologies to provide a fast, responsive, and maintainable application:

### Core Framework
- **[Next.js 16+](https://nextjs.org/)** - React framework with App Router for server-side rendering and static site generation
- **[React 19+](https://react.dev/)** - UI component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better code quality

### Styling & UI
- **[Tailwind CSS 4+](https://tailwindcss.com/)** - Utility-first CSS framework for responsive design
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Recharts](https://recharts.org/)** - Data visualization and charting library

### Development & Testing
- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/react)** - Component testing utilities
- **[ESLint](https://eslint.org/)** - Code linting for TypeScript
- **[Prettier](https://prettier.io/)** - Code formatting

### Build & Deployment
- **Static Export** - Deployable to any static hosting platform
- **Netlify/Vercel Ready** - Optimized for modern deployment platforms

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JustAGhosT/zeeplan.git
   cd zeeplan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

### Building for Production

```bash
# Create optimized production build
npm run build

# The output will be in the .next directory
# For static export deployment, configure in next.config.mjs
```

## 🤝 Integration with Farm Business Plan

Zeeplan works alongside the **[Farm Business Plan](https://github.com/JustAGhosT/farm-business-plan)** project, a comprehensive agricultural business planning framework and farm management tool available at **[farmplan.netlify.app](https://farmplan.netlify.app/)**.

### About Farm Business Plan

Farm Business Plan is a general-purpose agricultural business planning template that provides:
- Crop-agnostic planning frameworks
- Financial modeling tools and calculators
- Implementation timeline templates
- Risk management frameworks
- Interactive web application for farm management

### How They Work Together

| **Zeeplan** | **Farm Business Plan** |
|-------------|------------------------|
| Specific partnership proposal for Zeerust farm | General agricultural business planning template |
| Focused on cattle, goats, pigs, chickens, crops | Adaptable to any crop type or livestock |
| Detailed financial projections for one operation | Customizable financial calculators and models |
| Partnership-specific metrics and agreements | Universal planning frameworks |
| Implementation roadmap for 600ha Bushveld farm | Location-flexible templates for any region |

### Integration Opportunities

1. **Templates & Frameworks**
   - Use Farm Business Plan's templates as a starting point for new enterprise plans
   - Apply the general frameworks to customize Zeeplan's specific operations
   - Reference the SWOT analysis and risk management tools

2. **Financial Calculators**
   - Farm Business Plan provides interactive calculators for:
     - Investment calculations
     - Revenue projections
     - ROI analysis
     - Break-even calculations
     - Operating costs tracking
     - Loan scenario analysis
   - These can supplement Zeeplan's financial models

3. **Documentation & Best Practices**
   - Farm Business Plan's comprehensive documentation can guide expansion plans
   - Use crop-specific modules from Farm Business Plan for new diversification
   - Apply the market strategy framework to Zeeplan's direct-to-consumer approach

4. **Future Technical Integration**
   - **Shared Component Library**: Reuse React components across both projects
   - **Data Import/Export**: Transfer farm data between systems
   - **Unified Authentication**: Single sign-on for users managing multiple farms
   - **API Integration**: Connect Zeeplan's specific data with Farm Business Plan's calculators
   - **Template Marketplace**: Share successful enterprise plans and strategies

### Using Both Projects

**For Zeeplan Partners:**
1. Review the Zeeplan proposal and specific enterprise plans in this repository
2. Visit [farmplan.netlify.app](https://farmplan.netlify.app/) to access:
   - Additional financial calculators for scenario planning
   - General agricultural templates for new ventures
   - Market analysis frameworks
   - Risk assessment tools

**For Other Farmers:**
1. Use Farm Business Plan as a starting template
2. Reference Zeeplan's specific enterprise plans as examples:
   - Cattle ranging in Bushveld conditions
   - Goat dairy and cheese production
   - Pig farming implementation
   - Free-range chicken and egg production
   - Crop diversification strategy
   - Sekelbos clearance methodology

### Resources

- **Farm Business Plan Live App**: [https://farmplan.netlify.app/](https://farmplan.netlify.app/)
- **Farm Business Plan Repository**: [https://github.com/JustAGhosT/farm-business-plan](https://github.com/JustAGhosT/farm-business-plan)
- **Documentation**: Available in the Farm Business Plan docs folder

## 📂 Repository Structure

```
/docs          - Business plan and documentation files
/data          - Financial data and JSON files
/lib           - Shared utilities and data
/app           - Next.js application pages
/components    - React components
```

## 📞 Contact

**Hans Jurgens Smit**  
Date: November 7, 2025

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome! Please open an issue or pull request.

## 📄 License

This project is intended for the Zeerust farm partnership. For licensing inquiries, please contact the repository owner.

---

_This proposal represents a unique opportunity for zero-capital-entry, high-return regenerative agriculture partnership that benefits all stakeholders while preserving family farm dynamics._

**Complementary Tools**: Check out [Farm Business Plan](https://farmplan.netlify.app/) for additional agricultural planning resources and calculators.
