# Global Public Perception Survey on China's Four Global Initiatives
# 全球公众对中国四大倡议认知调查

This is a React-based survey application designed to collect public perception data globally. It supports multiple languages and is optimized for both desktop and mobile devices.

## 📁 Project Structure (项目结构)

- **`App.tsx`**: The main application component containing the wizard logic, state management, and page rendering.
- **`components/`**: Reusable UI components.
  - `AnswerStatus.tsx`: Shows completion progress (top corner).
  - `RatingInput.tsx`: Custom 0-10 rating input.
  - `LanguageSwitcher.tsx`: Language toggle.
  - `ProgressBar.tsx`: Visual progress indicator.
  - `SingleChoice.tsx` / `MultiChoice.tsx` / `Matrix.tsx`: Question type components.
- **`data/`**: Survey content files.
  - `zh.ts`: Chinese source data.
  - `en.ts`: English source data.
- **`constants.ts`**: Configuration for survey data loading and UI labels. Handles language fallbacks.
- **`types.ts`**: TypeScript definitions for the survey data structure.

## 🚀 Features (功能特性)

1.  **Multi-language Support**: 
    -   Primary: Chinese (ZH), English (EN).
    -   Fallbacks: French, Spanish, Russian, Arabic (currently using English data with localized headers).
2.  **Responsive Design**: Mobile-friendly layout with collapsible answer status card.
3.  **Data Persistence**: 
    -   No backend required.
    -   Answers are downloaded as a JSON file upon completion (`survey_answers.json`).
4.  **Custom UI**:
    -   Horizontal bar for 0-10 ratings.
    -   Matrix tables for complex questions.
    -   Dynamic input types (e.g., email validation).

## 🛠️ How to Run (如何运行)

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` directory, ready for deployment to GitHub Pages or any static host.

## 📝 Configuration

-   **Adding New Languages**:
    1.  Create a new file in `data/` (e.g., `fr.ts`).
    2.  Import it in `constants.ts` and add it to the `SURVEY_DATA` object.
    3.  Update `types.ts` to include the new language code.

## 🤝 Contribution

This project is built with React + TypeScript + Vite. 
Please ensure all new components are typed correctly and added to the `components/` directory.
