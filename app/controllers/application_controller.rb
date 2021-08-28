class ApplicationController < ActionController::API

  before_action :fake_load

  # ローカルだと通信が早すぎてローディング画面が見れないので全てのアクションの前に意図的に通信を1秒遅らせます。
  def fake_load
    sleep(1)
  end
end
