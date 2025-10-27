# Demo Chat Interface

A modern, minimalistic, anonymous real-time chat interface built for demonstration purposes.

## Technology Stack

- **Framework**: Next.js 15 App Router with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN
- **Package Manager**: Yarn 4

## Getting Started

### Prerequisites

- Node.js 22.x (or later) or Node Version Manager (nvm)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd demo-chat-interface
   ```

2. Setup yarn 4 and install dependencies:

   ```bash
   nvm use
   corepack enable
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Interview Exercises 🚀

Welcome to our interactive coding challenge! These exercises are designed to help us understand your problem-solving approach and technical skills. Don't worry about getting everything perfect - we're more interested in your thought process, how you break down problems, and your ability to communicate technical concepts.

Take your time, think out loud, and feel free to ask questions. Remember, there are often multiple valid solutions to each problem, so focus on explaining your reasoning and trade-offs.

### Exercise 1: Message Deduplication 🔄

**The Challenge:**
Currently, users can accidentally send the same message multiple times by rapidly pressing Enter or clicking the send button. This creates a poor user experience and unnecessary network traffic.

**Your Mission:**
Implement a solution to prevent duplicate message submissions while maintaining a smooth user experience.

---

### Exercise 2: Real-Time Multi-User Chat 💬

**The Challenge:**
Right now, the chat resets every time the page is refreshed, and users can't communicate with others. Let's make this a real multi-user chat experience!

**Your Mission:**
Transform this into a persistent chat where multiple browser windows (on localhost) can communicate with each other. Data should reside on the server.

---

### Exercise 3: Real-Time Communication Technologies 🌐

**The Discussion:**
Real-time communication is crucial for modern chat applications. Let's explore the technology landscape together!

**Your Task:**
Discuss various technologies and approaches for implementing real-time features. Consider their strengths, weaknesses, and when you might choose one over another.

**Topics to Explore:**

- Different protocols and technologies available
- Scalability considerations
- Browser compatibility and fallback strategies
- Performance implications
- Implementation complexity
- Cost and infrastructure requirements

**No Coding Required:** This is all about technical discussion and architectural thinking!

---

### Getting Started Tips 💡

1. **Read the existing code** - Understanding the current implementation will help you build upon it effectively
2. **Start small** - Break down each exercise into smaller, manageable tasks
3. **Document your thoughts** - We love seeing your reasoning process
4. **Ask questions** - We're here to help and clarify anything unclear

Remember: The goal isn't just to solve the problems, but to demonstrate your engineering mindset, communication skills, and ability to work collaboratively. Good luck, and most importantly - have fun! 🎉

Built with ❤️ for demonstration purposes.
