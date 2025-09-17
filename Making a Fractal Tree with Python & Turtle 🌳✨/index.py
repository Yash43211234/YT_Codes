import turtle
import random

# --- Setup the Turtle Screen ---
screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Psychedelic Fractal Tree")
turtle.speed(0) # Fastest drawing speed
turtle.pensize(2) # Set the line thickness
turtle.left(90) # Start pointing upwards

# --- Define a List of Colors ---
colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF"]

# --- The Recursive Drawing Function ---
def fractal_tree(length, level):
    if level == 0:
        return

    # Set the color for the current branch based on the level
    turtle.pencolor(colors[level % len(colors)])
    
    # Draw the trunk/current branch
    turtle.forward(length)
    
    # --- Branch 1: Left Branch ---
    turtle.left(45) # Turn left for the new branch
    fractal_tree(length * 0.7, level - 1) # Recursive call
    turtle.right(45) # Turn back to original direction

    # --- Branch 2: Right Branch ---
    turtle.right(45) # Turn right for the new branch
    fractal_tree(length * 0.7, level - 1) # Recursive call
    turtle.left(45) # Turn back to original direction
    
    # Move back to the start of the branch
    turtle.backward(length)

# --- Start the Drawing ---
# Position the turtle for the tree base
turtle.penup()
turtle.goto(0, -250)
turtle.pendown()

# Call the function to begin the drawing
# length: starting length of the main trunk
# level: how many times the function will repeat (higher = more branches)
fractal_tree(150, 7)

# Keep the window open
turtle.hideturtle()
screen.mainloop()
