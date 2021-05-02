<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlunosTable extends Migration
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
            $table->text('name', 100);
            $table->date('dataNasc');
            $table->set('serie', ['1_ano', '2_ano', '3_ano', '4_ano', '5_ano', '6_ano', '7_ano', '8_ano', '9_ano']);
            $table->decimal('cep', 8);
            $table->text('rua', 120);
            $table->decimal('numero');
            $table->text('complemento', 50);
            $table->text('bairro', 100);
            $table->text('cidade');
            $table->text('estado');
            $table->text('nomeMae');
            $table->decimal('cpfMae', 11);
            $table->set('dataPag', ['5', '10', '15', '20', '25']);
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
