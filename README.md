# PRODIGY_GA_03

# Markov Chain Text Generator  

A simple and interactive **Markov Chain-based Text Generator** built using **HTML**, **CSS**, and **JavaScript**. This project allows users to input a block of text and generate new text based on probabilistic predictions using Markov Chains.  

Features  
 📖 Customizable Order and Length**: Users can select the "order" (n-grams) and length of the generated text.  
 🎨 Modern Dark UI**: A responsive and attractively styled user interface with hover effects and clear text formatting.  
 🧠 Markov Chain Algorithm**: Implements a probabilistic model to predict and generate sequences of words based on user input.  
 💡 Dynamic Output**: Displays the generated text neatly, preserving whitespace and line breaks.  


Getting Started  

Prerequisites  
 A modern web browser (Chrome, Firefox, Edge, etc.).  
 Basic understanding of HTML, CSS, and JavaScript (optional, for code exploration).  

Installation  
1. Clone the repository:  
  
   git clone https://github.com/yourusername/markov-chain-text-generator.git
     
2. Navigate to the project directory:  
   
   cd markov-chain-text-generator
   
3. Open the `index.html` file in a web browser to run the application.  

Usage

1. Paste a block of text into the input field.  
2. Adjust the **order** (n-grams) and **output length** as desired.  
3. Click **"Generate Text"** to see the probabilistically generated text.  
4. Review the generated output in the display area below.  



Project Structure

plaintext
├── index.html    # Main HTML structure  
├── styles.css    # Styling for the application  
├── script.js     # JavaScript logic for Markov chain and text generation  
├── README.md     # Project documentation  




Tech Stack 
HTML: For structure and layout.  
 CSS: For responsive and modern styling with hover effects.  
  JavaScript: To implement Markov chain logic and handle user interactions.  

How It Works

1. The input text is split into sequences of words based on the specified **order (n-grams)**.  
2. A Markov chain is constructed, where:  
   - Keys represent the n-gram (sequence of n words).  
   - Values are the possible next words that can follow the n-gram.  
3. The algorithm probabilistically generates text by randomly selecting words based on the constructed Markov chain.  


Demo 

![image](https://github.com/user-attachments/assets/980b4566-02e1-4929-aa12-49494542f6d4)


Contributing  

Contributions are welcome! If you’d like to add features or improve the code, feel free to fork this repository and submit a pull request.  

1. Fork the repository.  
2. Create a new branch:  

   git checkout -b feature/your-feature-name
   
3. Commit your changes:  
   
   git commit -m "Add your message here"  
   
4. Push to the branch:  
   
   git push origin feature/your-feature-name  
   
5. Open a pull request.    

Acknowledgments

 Special thanks to **Prodigy Infotech** for the opportunity to work on this project as part of their **Generative AI Internship**.  
 Inspired by the principles of **Markov Chains** and **natural language processing**.  



Contact  

For any questions or feedback, feel free to connect:  
LinkedIn: https://www.linkedin.com/in/arunkishor-r
GitHub: arunkishorai
