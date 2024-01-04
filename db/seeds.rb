puts "seeding"
Bicepworkout.create(name: "Hammer curl", sets: 3, reps: 10)
Bicepworkout.create(name: "Bicep curl", sets: 3, reps: 10)
Bicepworkout.create(name: "Spider curl", sets: 3, reps: 10)
Review.create(comment: "if you are new to working out try hammer curl witj 7 reps", workout_id: 1)
Review.create(comment: "Bicep curl are really good on the bicep try to set the reps to 15", workout_id: 2)
Review.create(comment: "Spider curl is a little advance for people but good to learn", workout_id: 3)
puts "done seeding"