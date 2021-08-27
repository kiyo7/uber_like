# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001' #originに指定されたURLのみデータ通信を許可する

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head] #どのHTTPリクエストを許可するのかを設定する。(使わないものは指定しない方がセキュリティ強化にも繋がる)
  end
end
