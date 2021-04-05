class Poke:
  def __init__(self, name, level, ptype, max_health, is_knocked_out):
    self.name = name
    self.level = level
    self.ptype = ptype
    self.max_health = max_health
    self.curr_health = max_health
    self.is_knocked_out = is_knocked_out

  def __repr__(self):
    return 'Pokedex Log: \n \t{0} \n \t Level: {1} \n \t Type: {2} \n \t Max Health: {3} \n \t Current Health: {4}'.format(self.name, self.level,self.ptype, self.max_health, self.curr_health)

  def lose_health(self, dmg):
    self.curr_health -= dmg
    if self.curr_health <= 0:
      self.curr_health = 0
      self.knock_out()
      
  def healing(self, heal):
    result = self.curr_health + heal
    if self.curr_health == self.max_health:
      print('Already max health!')
    if result > self.max_health:
      self.curr_health = self.max_health
      print('{0} is now at max health!'.format(self.name))
    else:
      self.curr_health += heal
      print('{0} healed for {1}!'.format(self.name, heal))
      print('{0} now has {1} health!'.format(self.name, self.curr_health))

  def knock_out(self):
    print('{0} is knocked out!'.format(self.name))
    self.is_knocked_out = True

  def revival(self):
    if self.is_knocked_out:
      print('{0} has been revived!'.format(self.name))
      self.curr_health = round((2/3)*self.max_health)

  # def attack(self, targetpok):
  #   if self.type 

      












charmander = Poke("Charmander", 12, "Fire", 100, False)
#pikachu = Poke("Pikachu", 12, "Electric", 100, False)

#charmander.healing(10)
charmander.lose_health(100)
print(charmander)
charmander.revival()
print(charmander)



charmander.lose_health(40)
#print(pikachu)
print(charmander)















      


