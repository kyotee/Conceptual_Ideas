require 'test_helper'

class DefaultViewPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get default_view_pages_home_url
    assert_response :success
  end

  test "should get tutorial" do
    get default_view_pages_tutorial_url
    assert_response :success
  end

  test "should get about" do
    get default_view_pages_about_url
    assert_response :success
  end

  test "should get contact" do
    get default_view_pages_contact_url
    assert_response :success
  end

end
