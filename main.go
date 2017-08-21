package main

import (
	"os"
	"log"
	"github.com/fmicaelli/framedata"
	"github.com/fmicaelli/thirdstrikedatabot/data"
)

func main() {
	args := os.Args
	if len(args) == 1 {
		log.Fatal("Bot Token missing")
	}
	token := os.Args[1]
	framedata.RunBot(token, data.GetMove)
}


