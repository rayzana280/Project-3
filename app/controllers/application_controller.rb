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
end 