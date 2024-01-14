puts "seeding"
Bicepworkout.create(name: "Hammer curl", sets: 3, reps: 10)
Bicepworkout.create(name: "Bicep curl", sets: 3, reps: 10)
Bicepworkout.create(name: "Spider curl", sets: 3, reps: 10)
Tricepworkout.create(name: "Triceps kickbacks", sets: 3, reps: 10)
Tricepworkout.create(name: "Diamond pushup", sets: 3, reps: 15)
Tricepworkout.create(name: "Bench dip", sets: 4, reps: 15)
Review.create(comment: "if you are new to working out try hammer curl with 7 reps", workout_id: 1)
Review.create(comment: "Bicep curl are really good on the bicep try to set the reps to 15", workout_id: 2)
Review.create(comment: "Spider curl is a little advance for people but good to learn", workout_id: 3)
Tricepreview.create(comment: "Triceps kickbacks is a good workout but you need to start with lower weights", tricepworkout_id: 1)
Tricepreview.create(comment: "Diamond pushups is a bit harder than army pushups so start on your knees", tricepworkout_id: 2)
Tricepreview.create(comment: "Bench dip is 10/10 work out do more reps", tricepworkout_id: 3)
puts "done seeding"