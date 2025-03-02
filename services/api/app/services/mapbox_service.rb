class MapboxService
  class << self
    def autocomplete(query)
      response = HTTParty.get(search_url(query),
        query:
          {
            q: query,
            access_token: access_token,
            limit: 5
          }
      )

      response.parsed_response
    end

    private

    def search_url(query)
      'https://api.mapbox.com/search/searchbox/v1/forward'
    end

    def base_url
      ENV.fetch('MAPBOX_URL', '')
    end

    def access_token
      ENV.fetch('MAPBOX_ACCESS_TOKEN', '')
    end
  end
end
