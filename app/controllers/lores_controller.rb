class LoresController < ApplicationController
  # GET /lores
  # GET /lores.json
  def index
    @lores = Lore.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @lores }
    end
  end

  # GET /lores/1
  # GET /lores/1.json
  def show
    @lore = Lore.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @lore }
    end
  end

  # GET /lores/new
  # GET /lores/new.json
  def new
    @lore = Lore.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @lore }
    end
  end

  # GET /lores/1/edit
  def edit
    @lore = Lore.find(params[:id])
  end

  # POST /lores
  # POST /lores.json
  def create
    @lore = Lore.new(params[:lore])

    respond_to do |format|
      if @lore.save
        format.html { redirect_to @lore, notice: 'Lore was successfully created.' }
        format.json { render json: @lore, status: :created, location: @lore }
      else
        format.html { render action: "new" }
        format.json { render json: @lore.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /lores/1
  # PUT /lores/1.json
  def update
    @lore = Lore.find(params[:id])

    if params[:operation] == 'up'
      @lore.ranking = @lore.ranking + 1
      @lore.save
      return render :json => {ranking: @lore.ranking}
    elsif params[:operation] == 'down'
      @lore.ranking = @lore.ranking - 1 
      @lore.save
      return render :json => {ranking: @lore.ranking}
    end

    respond_to do |format|
      if @lore.update_attributes(params[:lore])
        format.html { redirect_to @lore, notice: 'Lore was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @lore.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lores/1
  # DELETE /lores/1.json
  def destroy
    @lore = Lore.find(params[:id])
    @lore.destroy

    respond_to do |format|
      format.html { redirect_to lores_url }
      format.json { head :no_content }
    end
  end
end
