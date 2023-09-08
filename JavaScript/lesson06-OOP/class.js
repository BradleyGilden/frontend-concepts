#!/usr/bin/env node

// class - blueprint of an object

class Player {

    points = 0;

    //when you declare a method in a class you don't need function keyword
    win(){
        this.points += 3;
    }

    draw(){
        this.points += 1;
    }

    lose(){
        if (this.points != 0)
            this.points -= 1;
    }

    display(){
        console.log(`score:`, this.points)
    }

    //takes in a second player object and compares scores
    winner(p2){
        if (p2.points > this.points)
            console.log('you won')
        else if (p2.points == this.points)
            console.log('you and second player draw')
        else
            console.log('you lost')
    }
}

p1 = new Player()
p2 = new Player()

p1.win()
p1.draw()
p1.display()

p2.draw()
p2.lose()
p2.display()

p1.winner(p2)
p2.winner(p1)
