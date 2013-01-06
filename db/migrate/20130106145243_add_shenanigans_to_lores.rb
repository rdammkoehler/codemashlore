class AddShenanigansToLores < ActiveRecord::Migration
  def change
    add_column :lores, :shenanigans, :boolean
  end
end
