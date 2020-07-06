require 'rails_helper'

describe BooksController do
  describe 'GET #index' do
    context 'when there are books' do
      let!(:books) { create_list(:book, 3) }

      before do
        get :index, params: { limit: 3, page: 1 }
      end

      it 'responds with success status code',
         dictum: 'Returns the list with all Books paginated' do
        expect(response).to have_http_status :ok
      end

      it 'responds with the right count' do
        expect(JSON.parse(response.body)['count']).to eq 3
      end

      it 'responds with the serialized books' do
        expect((JSON.parse(response.body)['page']).to_json)
          .to eq ActiveModel::Serializer::CollectionSerializer.new(
              books, each_serializer: BookSerializer
          ).to_json
      end
    end

    context 'when there not books' do
      before do
        get :index
      end

      it 'responds with empty array' do
        expect(JSON.parse(response.body)['page']).to eq []
      end
    end
  end
end
