class BooksController < ApplicationController
  include Wor::Paginate

  def index
    render_paginated Book.all
    # Many options can be used here, like 'each_serializer' to pass a custom serializer
    # for more information read https://github.com/Wolox/wor-paginate
  end
end
