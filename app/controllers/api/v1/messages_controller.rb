class Api::V1::MessagesController < ApplicationController
  def index
    @greetings = Message.all.sample.greet
    render json: { greeting: @greetings }
  end
end
