require 'sinatra'
class ApplicationController < Sinatra::Base
    get '/' do 
        workout = Bicepworkout.all
        workout.to_json
    end 
    #add a get for review 
    get '/review' do 
        review = Review.all 
        review.to_json 
    end 

    post '/review' do 
        review = Review.create(
            comment: params[:comment],
            workout_id: params[:workout_id]
        )
        review.to_json
    end 

    get '/triceps' do 
        tricpeworkout = Tricepworkout.all
        tricpeworkout.to_json
    end 

    get '/tricepsreview' do 
        review = Tricepreview.all
        review.to_json
    end 

    post '/tricepsreview' do 
        review = Tricepreview.create(
            comment: params[:comment],
            tricepworkout_id: params[:tricepworkout_id]
        )
        review.to_json
    end 

    delete '/review/:id' do 
        review = Review.find(params[:id])
        review.destroy
        review.to_json
    end 

    delete '/tricepsreview/:id' do
        review = Tricepreview.find(params[:id])
        review.destroy
        review.to_json 
    end 
end 