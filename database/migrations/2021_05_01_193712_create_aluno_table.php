<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlunos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alunos', function (Blueprint $table) {
            $table->id();
            $table->string("name", 100);
            $table->date_format("dataNasc");
            $table->string("serie");
            $table->number_format("cep", 8);
            $table->string("rua", 120);
            $table->number_format("numero");
            $table->string("complemento", 50);
            $table->string("bairro", 100);
            $table->string("cidade");
            $table->string("estado");
            $table->string("nomeMae");
            $table->number_format("cpfMae", 11);
            $table->date_format("dataPag");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alunos');
    }
}