class Api::V1::MessagesController < ApplicationController
  def index
    all_messages = Message.all

    render json: all_messages
  end
end