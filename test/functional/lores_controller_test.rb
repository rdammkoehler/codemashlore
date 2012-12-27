require 'test_helper'

class LoresControllerTest < ActionController::TestCase
  setup do
    @lore = lores(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lores)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lore" do
    assert_difference('Lore.count') do
      post :create, lore: { context: @lore.context, ranking: @lore.ranking, title: @lore.title }
    end

    assert_redirected_to lore_path(assigns(:lore))
  end

  test "should show lore" do
    get :show, id: @lore
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @lore
    assert_response :success
  end

  test "should update lore" do
    put :update, id: @lore, lore: { context: @lore.context, ranking: @lore.ranking, title: @lore.title }
    assert_redirected_to lore_path(assigns(:lore))
  end

  test "should destroy lore" do
    assert_difference('Lore.count', -1) do
      delete :destroy, id: @lore
    end

    assert_redirected_to lores_path
  end
end
