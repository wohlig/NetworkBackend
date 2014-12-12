<div class="row" style="padding:1% 0">
	<div class="col-md-12">
		<div class="pull-right">
			<a href="<?php echo site_url('site/viewproductimage?id=').$productid; ?>" class="btn btn-primary pull-right"><i class="icon-long-arrow-left"></i>&nbsp;Back</a>
		</div>
	</div>
</div>
<?php 
echo $productid;
?>
<div class="row">
	<div class="col-lg-12">
	    <section class="panel">
		    <header class="panel-heading">
				 Product Image Details
			</header>
			<div class="panel-body">
			  <form class="form-horizontal tasi-form" method="post" action="<?php echo site_url('site/createproductimagesubmit');?>">
			  
				<div class="form-group">
				  <label class="col-sm-2 control-label" for="normal-field">Product</label>
				  <div class="col-sm-4">
					<input type="text" id="normal-field" class="form-control" name="product" value="<?php echo set_value('product',$productid);?>">
					
				  </div>
				</div>
<!--
				<div class=" form-group">
				  <label class="col-sm-2 control-label">Select Product</label>
				  <div class="col-sm-4">
					<?php
						
						echo form_dropdown('product',$product,set_value('product'),'id="select4" class="chzn-select form-control" 	data-placeholder="Choose a Accesslevel..."');
					?>
				  </div>
				</div>
-->
				<div class=" form-group">
				  <label class="col-sm-2 control-label" for="normal-field">Image</label>
				  <div class="col-sm-4">
					<input type="file" id="normal-field" class="form-control imagefile"  name="image" value="<?php echo set_value('image');?>">
				  </div>
				</div>
				<div class="form-group">
				  <label class="col-sm-2 control-label" for="normal-field">order</label>
				  <div class="col-sm-4">
					<input type="text" id="normal-field" class="form-control" name="order" value="<?php echo set_value('order');?>">
					
				  </div>
				</div>
				<div class="form-group"  style="display:none;">
				  <label class="col-sm-2 control-label" for="normal-field">Image name</label>
				  <div class="col-sm-4">
					<input type="text"  id="normal-field" class="form-control imagename" name="imagename" value="<?php echo set_value('imagename');?>" >
				  </div>
				</div>
				
				
				<div class=" form-group">
				  <label class="col-sm-2 control-label">&nbsp;</label>
				  <div class="col-sm-4">
				  <button type="submit" class="btn btn-primary">Save</button>
				  <a href="<?php echo site_url('site/viewproductimage'); ?>" class="btn btn-secondary">Cancel</a>
				</div>
				</div>
			  </form>
			</div>
		</section>
	</div>
</div>


<script>
    $(document).ready(function() {
        $(".imagefile").change( function() {
            var imagename=$(".imagefile").get(0).files[0].name;
            $(".imagename").val(imagename);
        });
    });
</script>