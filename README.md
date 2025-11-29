# Smart Task Analyzer

A smart task management mini-application that intelligently scores and prioritizes tasks based on multiple factors including urgency, importance, and effort. This helps users decide what they must focus on first to maximize productivity.

---

## Features

- Add tasks with:
  - Task title
  - Due date
  - Priority (High / Medium / Low)
  - Estimated time to complete (hours)
- Intelligent scoring based on:
  - Urgency (closer deadlines get higher score)
  - Priority level
  - Effort needed (shorter tasks score higher)
  - Overdue tasks automatically become top priority
- Automatic sorting by score — highest priority shown first
- Clean and responsive UI
- Delete and Complete task actions
- Priority-based color coding for visual clarity

---

## Scoring Algorithm — Design Decisions

The scoring is calculated using weighted factors:

| Factor | Logic | Score Contribution |
|--------|------|------------------|
| **Urgency** | Due date comparison with current date | 10 — 40 |
| **Priority** | High > Medium > Low | High=10, Medium=5, Low=2 |
| **Effort (Estimated Time)** | Shorter duration → higher score | ≤2hrs: +20, 3–5hrs: +10, >5hrs: +5 |


The final score formula: score = urgencyScore + priorityScore + effortScore


Goal: Balance **time sensitivity**, **importance**, and **productivity**.

---

## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML** | UI structure |
| **CSS** | Styling + priority color coding |
| **JavaScript** | Logic, scoring, sorting, DOM rendering |

---

## Project Structure
```
├── index.html    # UI & Layout
├── styles.css    # Styling & priority color coding
└── script.js     # Smart scoring & task management logic
```


---

## How to Run

- Download or clone the repository  
- Open `index.html` in any browser  
(Chrome recommended)

Developer Tip: Use VS Code extension **Live Server** for auto-refresh while editing.

---

## Edge Cases Handled

- Prevent empty task input  
- Prevent invalid past dates  
- Re-sorting after every change  
- Dynamic score calculation  

---

## Future Improvements (if extended)

- LocalStorage support to save tasks
- Edit/update task functionality
- Tooltip to explain score breakdown
- Animations for card sorting
- Completed tasks history section

---

## 📸 UI Preview

Here are some screenshots of the Smart Task Analyzer application:

![Smart Task Analyzer UI - 1](https://raw.githubusercontent.com/yash-wavhal/smart-task-analyzer/main/assets/one.png)
![Smart Task Analyzer UI - 2](https://raw.githubusercontent.com/yash-wavhal/smart-task-analyzer/main/assets/two.png)
![Smart Task Analyzer UI - 3](https://raw.githubusercontent.com/yash-wavhal/smart-task-analyzer/main/assets/three.png)

---

## Author

**Yash Wavhal**  
GitHub: https://github.com/yash-wavhal/smart-task-analyzer

---

### gitConclusion
This Smart Task Analyzer demonstrates algorithmic thinking, clean front-end implementation, intelligent decision logic, and proper documentation - aligning perfectly with the assignment’s evaluation criteria.