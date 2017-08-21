//Package data implements the structure of Json for Third Strike frame data.
package data

import (
	"encoding/json"
	"fmt"
	"strings"
	"bytes"
	"github.com/fmicaelli/framedata/util"
)

type ThirdStrikeMove struct {
	Name                 string
	Common_Name          string
	Startup              string
	Hit                  string
	Recovery             string
	Block_advantage      string
	Hit_advantage        string
	Crouch_hit_advantage string
	Cancel               Cancel
	Parry                Parry
	Kara_range           string
	Throw_range          string
	Damage               string
	Stun                 string
	Bar_gain_attacker    BarGain
	Bar_gain_opponent    BarGain
}

type Cancel struct {
	Super_art bool
	Special   bool
	Self      bool
	Chain     bool
	Dash      bool
	High_jump bool
}

type Parry struct {
	High bool
	Low  bool
}

type BarGain struct {
	Whiff string
	Hit   string
	Block string
}

func GetMove(characterData []byte, moveName string) (s string, err error) {
	var moveList []ThirdStrikeMove
	err = json.Unmarshal(characterData, &moveList)
	if err != nil {
		return
	}

	// Search for the move in the move list
	for _, move := range moveList {
		if util.EqualFoldWithoutSpace(move.Name, moveName) || util.ContainsIgnoreCaseAndWithoutSpace(strings.Split(move.Common_Name, ","), moveName) {
			s = move.String()
			return
		}
	}

	return
}

func (t ThirdStrikeMove) String() string {
	var buffer bytes.Buffer
	buffer.WriteString(fmt.Sprintf("Common_Name: %s\n", t.Common_Name))
	buffer.WriteString(fmt.Sprintf("Name: %s\n", t.Name))
	buffer.WriteString(fmt.Sprintf("Startup: %s\n", t.Startup))
	buffer.WriteString(fmt.Sprintf("Hit: %s\n", t.Hit))
	buffer.WriteString(fmt.Sprintf("Recovery: %s\n", t.Recovery))
	buffer.WriteString(fmt.Sprintf("Block_advantage: %s\n", t.Block_advantage))
	buffer.WriteString(fmt.Sprintf("Hit_advantage: %s\n", t.Hit_advantage))
	buffer.WriteString(fmt.Sprintf("Crouch_hit_advantage: %s\n", t.Crouch_hit_advantage))
	buffer.WriteString(fmt.Sprintf("Cancel: %s\n", t.Cancel.String()))
	buffer.WriteString(fmt.Sprintf("Parry: %s\n", t.Parry.String()))
	buffer.WriteString(fmt.Sprintf("Kara_range: %s\n", t.Kara_range))
	buffer.WriteString(fmt.Sprintf("Throw_range: %s\n", t.Throw_range))
	buffer.WriteString(fmt.Sprintf("Damage: %s\n", t.Damage))
	buffer.WriteString(fmt.Sprintf("Stun: %s\n", t.Stun))
	buffer.WriteString(fmt.Sprintf("Bar_gain_attacker: %s\n", t.Bar_gain_attacker.String()))
	buffer.WriteString(fmt.Sprintf("Bar_gain_opponent: %s\n", t.Bar_gain_opponent.String()))
	return buffer.String()
}

func (c Cancel) String() string {
	var s []string
	if c.Special {
		s = append(s, "Special")
	}
	if c.Super_art {
		s = append(s, "Super_art")
	}
	if c.Chain {
		s = append(s, "Chain")
	}
	if c.Dash {
		s = append(s, "Dash")
	}
	if c.High_jump {
		s = append(s, "High_jump")
	}
	if c.Self {
		s = append(s, "Self")
	}
	return strings.Join(s, "/")
}

func (p Parry) String() string {
	var s []string
	if p.High {
		s = append(s, "H")
	}
	if p.Low {
		s = append(s, "L")
	}
	return strings.Join(s, "+")
}

func (b BarGain) String() string {
	var s []string
	if len(b.Whiff) != 0 {
		s = append(s, fmt.Sprintf("Whiff: %s", b.Whiff))
	}
	s = append(s, fmt.Sprintf("Hit: %s", b.Hit))
	s = append(s, fmt.Sprintf("Block: %s", b.Block))
	return strings.Join(s, "/")
}
