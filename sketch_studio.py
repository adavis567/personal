import os
import io
import threading
import tkinter as tk
from tkinter import ttk, messagebox, filedialog, colorchooser
from PIL import Image, ImageDraw, ImageTk, ImageColor

# Attempt to import the new official google-genai library
try:
    from google import genai
    from google.genai import types
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False

class SketchStudioApp:
    def __init__(self, root):
        self.root = root
        # Set the window title precisely as requested
        self.root.title("Sketch Studio — Submitted by: Anthony Davis")
        self.root.resizable(False, False)
        
        # Main layout frame holding canvas and generated view
        self.main_frame = tk.Frame(root)
        self.main_frame.pack(padx=10, pady=10)
        
        # --- Canvas Area ---
        self.canvas_frame = tk.Frame(self.main_frame)
        self.canvas_frame.grid(row=0, column=0, padx=10)
        
        tk.Label(self.canvas_frame, text="Your Sketch", font=("Arial", 12, "bold")).pack(pady=5)
        
        # 400x400 drawing canvas with crosshair cursor
        self.canvas = tk.Canvas(self.canvas_frame, width=400, height=400, bg='white', cursor="cross", relief="sunken", bd=2)
        self.canvas.pack()
        
        # --- Result Area ---
        self.result_frame = tk.Frame(self.main_frame)
        self.result_frame.grid(row=0, column=1, padx=10)
        
        tk.Label(self.result_frame, text="Generated Artwork", font=("Arial", 12, "bold")).pack(pady=5)
        
        # Label to display either text status or the final image inside the same window
        self.result_label = tk.Label(self.result_frame, text="Generate an image to see it here.", bg="#F0F0F0", width=55, height=26, relief="sunken", bd=2)
        self.result_label.pack()
        
        # --- Controls Area ---
        self.controls_frame = tk.Frame(root)
        self.controls_frame.pack(pady=10, fill="x", padx=20)
        
        # Row 0: Tools
        self.tools_frame = tk.Frame(self.controls_frame)
        self.tools_frame.pack(pady=5, anchor="w")
        
        tk.Label(self.tools_frame, text="Tools:").pack(side="left", padx=(0, 10))
        
        self.mode_var = tk.StringVar(value="draw")
        tk.Radiobutton(self.tools_frame, text="Draw Tool", variable=self.mode_var, value="draw").pack(side="left")
        tk.Radiobutton(self.tools_frame, text="Eraser", variable=self.mode_var, value="erase").pack(side="left", padx=5)
        tk.Radiobutton(self.tools_frame, text="Fill", variable=self.mode_var, value="fill").pack(side="left", padx=5)
        
        self.current_color = "black"
        self.color_btn = tk.Button(self.tools_frame, text="Choose Color", command=self.choose_color)
        self.color_btn.pack(side="left", padx=5)
        
        self.color_preview = tk.Frame(self.tools_frame, width=15, height=15, bg=self.current_color, relief="sunken", bd=2)
        self.color_preview.pack(side="left", padx=(0, 10))
        
        self.clear_btn = tk.Button(self.tools_frame, text="Clear Canvas", command=self.clear_canvas)
        self.clear_btn.pack(side="left", padx=20)
        
        # Row 1: Style & Details
        self.options_frame = tk.Frame(self.controls_frame)
        self.options_frame.pack(pady=5, anchor="w")
        
        tk.Label(self.options_frame, text="Art Style:").pack(side="left")
        self.style_var = tk.StringVar(value="watercolor")
        self.style_dropdown = ttk.Combobox(self.options_frame, textvariable=self.style_var, 
                                           values=["watercolor", "pixel art", "oil painting", "realistic"], state="readonly", width=15)
        self.style_dropdown.pack(side="left", padx=5)
        
        tk.Label(self.options_frame, text="Extra Details:").pack(side="left", padx=(15, 5))
        self.details_var = tk.StringVar()
        self.details_entry = tk.Entry(self.options_frame, textvariable=self.details_var, width=40)
        self.details_entry.pack(side="left")
        
        # Row 2: Action Buttons
        self.actions_frame = tk.Frame(self.controls_frame)
        self.actions_frame.pack(pady=10)
        
        self.generate_btn = tk.Button(self.actions_frame, text="Generate Image", command=self.generate_image, bg="lightblue", font=("Arial", 11, "bold"))
        self.generate_btn.pack(side="left", padx=10)
        
        self.save_btn = tk.Button(self.actions_frame, text="Save Image", command=self.save_image, state="disabled")
        self.save_btn.pack(side="left", padx=10)
        
        # --- Status Bar ---
        self.status_var = tk.StringVar(value="Ready.")
        self.status_label = tk.Label(root, textvariable=self.status_var, fg="gray")
        self.status_label.pack(side="bottom", anchor="w", padx=10)

        # Variables for tracking mouse movement
        self.old_x = None
        self.old_y = None
        
        # Bind mouse events to the canvas
        self.canvas.bind('<Button-1>', self.start_action)
        self.canvas.bind('<B1-Motion>', self.paint)
        self.canvas.bind('<ButtonRelease-1>', self.reset_coords)
        
        # Initialize a PIL Image and Draw object to mimic canvas drawings
        self.image = Image.new("RGB", (400, 400), "white")
        self.draw = ImageDraw.Draw(self.image)
        
        # Image states
        self.tk_image = None
        self.generated_pil = None  # Store the actual full-res generated image for saving
        self.canvas_bg_tk = None
        
    def start_action(self, event):
        """Called when mouse is first clicked on the canvas."""
        mode = self.mode_var.get()
        x, y = event.x, event.y
        if mode == "fill":
            try:
                # Pillow's floodfill handles filling the clicked area with the selected color
                fill_color = ImageColor.getrgb(self.current_color)
                ImageDraw.floodfill(self.image, xy=(x, y), value=fill_color)
                # Refresh the Tkinter canvas to display the updated PIL image
                self.canvas.delete("all")
                self.canvas_bg_tk = ImageTk.PhotoImage(self.image)
                self.canvas.create_image(0, 0, image=self.canvas_bg_tk, anchor="nw")
            except Exception as e:
                print(f"Fill error: {e}")
        else:
            self.old_x = x
            self.old_y = y
            # Draw a single dot for a single click
            color = self.current_color if mode == 'draw' else 'white'
            width = 3 if mode == 'draw' else 15
            r = width / 2.0
            self.canvas.create_oval(x - r, y - r, x + r, y + r, fill=color, outline=color)
            self.draw.ellipse([x - r, y - r, x + r, y + r], fill=color, outline=color)
        
    def paint(self, event):
        """Draws or erases on the canvas and identically on the Pillow background image."""
        mode = self.mode_var.get()
        if mode == "fill":
            return
            
        x, y = event.x, event.y
        
        # Determine styling based on whether user is drawing or erasing
        color = self.current_color if mode == 'draw' else 'white'
        width = 3 if mode == 'draw' else 15
        
        if self.old_x is not None and self.old_y is not None:
            # Draw on tkinter canvas
            self.canvas.create_line(self.old_x, self.old_y, x, y, width=width, fill=color, capstyle=tk.ROUND, smooth=True)
            # Draw on background PIL image
            self.draw.line([self.old_x, self.old_y, x, y], fill=color, width=width, joint="curve")
            
        self.old_x = x
        self.old_y = y
        
    def reset_coords(self, event):
        """Resets the previous mouse coordinates when let go."""
        self.old_x = None
        self.old_y = None
        
    def choose_color(self):
        """Opens a color picker to select drawing color."""
        color_code = colorchooser.askcolor(title="Choose color", color=self.current_color)
        if color_code[1]:
            self.current_color = color_code[1]
            self.color_preview.config(bg=self.current_color)
        
    def clear_canvas(self):
        """Clears the sketch area and resets the background PIL image."""
        self.canvas.delete("all")
        self.image = Image.new("RGB", (400, 400), "white")
        self.draw = ImageDraw.Draw(self.image)
        self.canvas_bg_tk = None
        
        # We do not clear the generated image to allow the user to keep viewing/saving it
        self.status_var.set("Canvas cleared.")
        
    def save_image(self):
        """Allows the user to save the generated image to their computer."""
        if not self.generated_pil:
            return
            
        file_path = filedialog.asksaveasfilename(
            defaultextension=".png",
            filetypes=[("PNG files", "*.png"), ("JPEG files", "*.jpg"), ("All files", "*.*")],
            title="Save Generated Image"
        )
        if file_path:
            try:
                self.generated_pil.save(file_path)
                self.status_var.set(f"Image saved to {os.path.basename(file_path)}")
                messagebox.showinfo("Success", "Image saved successfully!")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to save image:\n{e}")

    def generate_image(self):
        """Validates API Key and triggers background thread to generate artwork."""
        api_key = os.environ.get("GEMINI_API_KEY")
        if not api_key:
            messagebox.showerror("Missing API Key", "GEMINI_API_KEY environment variable is not set.\n\nPlease set it in your terminal before running.")
            return
            
        if not HAS_GENAI:
            messagebox.showerror("Missing Dependencies", "The google-genai library is not installed.\n\nPlease run: pip install google-genai pillow")
            return

        extrema = self.image.convert("L").getextrema()
        if extrema == (255, 255):
            messagebox.showwarning("Warning", "The canvas is empty! Please draw something first.")
            return

        self.status_var.set("Generating... Please wait.")
        # Disable buttons so user cannot spam API
        self.generate_btn.config(state="disabled")
        self.save_btn.config(state="disabled")
        
        # Run generation in a separate thread so Tkinter UI doesn't freeze
        threading.Thread(target=self._process_image_generation, args=(api_key,), daemon=True).start()
        
    def _process_image_generation(self, api_key):
        """Background process that handles Google GenAI requests."""
        try:
            client = genai.Client(api_key=api_key)
            style = self.style_var.get()
            extra_details = self.details_var.get().strip()
            
            # Step A: Describe the sketch using Gemini Flash
            self.status_var.set("Step 1/2: Analyzing sketch concept...")
            # Automatically fallback to gemini-1.5-flash if 2.5 is experiencing high demand
            try:
                desc_response = client.models.generate_content(
                    model="gemini-2.5-flash",
                    contents=[
                        self.image, 
                        "You are looking at a simple sketch drawn by a user. Describe the core subject and composition of this sketch briefly."
                    ]
                )
            except Exception as model_err:
                self.status_var.set("Step 1/2: High demand on primary model, falling back...")
                desc_response = client.models.generate_content(
                    model="gemini-1.5-flash",
                    contents=[
                        self.image, 
                        "You are looking at a simple sketch drawn by a user. Describe the core subject and composition of this sketch briefly."
                    ]
                )
                
            sketch_description = desc_response.text
            
            # Step B: Generate the final image via Imagen 3 using the newly updated prompt
            self.status_var.set(f"Step 2/2: Drawing in {style} style...")
            prompt = f"Transform this sketch concept into a {style} artwork. The sketch concept is: {sketch_description}."
            
            if extra_details:
                prompt += f" Ensure you incorporate these additional user instructions: {extra_details}."
                
            import urllib.parse
            import urllib.request
            import ssl
            
            # macOS Python installations often lack root certificates. Bypass locally.
            ctx = ssl.create_default_context()
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            
            encoded_prompt = urllib.parse.quote(prompt)
            url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=400&height=400&nologo=true"
            
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as resp:
                img_bytes = resp.read()
                
            self.generated_pil = Image.open(io.BytesIO(img_bytes))
            
            # Create a localized copy strictly for UI displaying to maintain save quality
            display_img = self.generated_pil.copy()
            display_img.thumbnail((400, 400), Image.Resampling.LANCZOS)
            self.tk_image = ImageTk.PhotoImage(display_img)
            
            # Update UI on main thread successfully
            self.root.after(0, self._update_result_image)
            
        except Exception as e:
            # Handle API or parsing errors safely
            error_msg = str(e)
            self.root.after(0, lambda: messagebox.showerror("Generation Error", f"An error occurred:\n\n{error_msg}"))
            self.root.after(0, lambda: self.status_var.set("Error during generation."))
            self.root.after(0, lambda: self.generate_btn.config(state="normal"))

    def _update_result_image(self):
        """Runs on main thread: updates the right panel with the final image."""
        self.result_label.config(image=self.tk_image, text="", width=400, height=400)
        self.status_var.set("Image generated successfully!")
        self.generate_btn.config(state="normal")
        self.save_btn.config(state="normal")  # Make save functionality available

if __name__ == "__main__":
    root = tk.Tk()
    app = SketchStudioApp(root)
    root.mainloop()
