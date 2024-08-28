puts "seeding"
Bicepworkout.create(name: "Hammer curl", sets: 3, reps: 10, image: "https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233")
Bicepworkout.create(name: "Bicep curl", sets: 3, reps: 10, image: "https://www.armyprt.com/wp-content/uploads/2023/06/inner-bicep-curl-muscles-1536x1081-1-1024x721.png")
Bicepworkout.create(name: "Spider curl", sets: 3, reps: 10, image: "https://gymvisual.com/7149-thickbox_default/dumbbell-reverse-spider-curl.jpg")
Tricepworkout.create(name: "Triceps kickbacks", sets: 3, reps: 10, image: "https://samarpanphysioclinic.com/wp-content/uploads/2023/06/tricep-kickback-exercise-1200x785.webp")
Tricepworkout.create(name: "Diamond pushup", sets: 3, reps: 15, image: "https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638115768914-NXJ6XWIQ9PVDSKAGV02Q/Diamond%2BPush%2BUps.png")
Tricepworkout.create(name: "Bench dip", sets: 4, reps: 15, image: "https://training.fit/wp-content/uploads/2020/03/arnold-dips.png")
Review.create(comment: "if you are new to working out try hammer curl with 7 reps", workout_id: 1)
Review.create(comment: "Bicep curl are really good on the bicep try to set the reps to 15", workout_id: 2)
Review.create(comment: "Spider curl is a little advance for people but good to learn", workout_id: 3)
Tricepreview.create(comment: "Triceps kickbacks is a good workout but you need to start with lower weights", workout_id: 1)
Tricepreview.create(comment: "Diamond pushups is a bit harder than army pushups so start on your knees", workout_id: 2)
Tricepreview.create(comment: "Bench dip is 10/10 work out do more reps", workout_id: 3)
#bench dip image: https://training.fit/wp-content/uploads/2020/03/arnold-dips.png
#diamond pushup image: https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1638115768914-NXJ6XWIQ9PVDSKAGV02Q/Diamond%2BPush%2BUps.png
#tricep kickbacks image:https://samarpanphysioclinic.com/wp-content/uploads/2023/06/tricep-kickback-exercise-1200x785.webp

#spider curls image: https://gymvisual.com/7149-thickbox_default/dumbbell-reverse-spider-curl.jpg
#bicep curls image: https://www.armyprt.com/wp-content/uploads/2023/06/inner-bicep-curl-muscles-1536x1081-1-1024x721.png
#hammer curl image :https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233
puts "done seeding"