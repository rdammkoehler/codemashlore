class CreateLores < ActiveRecord::Migration
  def change
    create_table :lores do |t|
      t.text :context
      t.integer :ranking
      t.string :title

      t.timestamps
    end
  end
end
