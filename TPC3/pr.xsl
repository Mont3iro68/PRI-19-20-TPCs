<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>
                     Project Record
                </title>
                <meta charset="UTF-8"></meta>
            </head>
            <body>
                <h1 style="text-align:center">Project Record</h1>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="meta">
            <table style = "border: 2px black solid; width: 100%" >
                <tr>
                    <td><b>KEY NAME:</b><xsl:value-of select="keyname"/></td>
                    <td><b>BEGIN DATE:</b><xsl:value-of select="bdate"/></td>
                </tr> 
                <tr>
                    <td><b>TITLE:</b><xsl:value-of select="title"/></td>
                    <td><b>END DATE:</b><xsl:value-of select="edate"/></td>
                </tr>
                <tr>
                    <td><b>SUBTITLE:</b><xsl:value-of select="subtitle"/></td>
                    <td><b>SUPERVISOR:</b><a href="{supervisor/homepage}"><xsl:value-of select="supervisor/name"/></a> - <a href="mailto:{supervisor/email}"><xsl:value-of select="supervisor/email"/></a></td>
                </tr>
            </table>        
    </xsl:template>
    <xsl:template match="workteam">
        <br/>
        <div style="border: 2px solid black">
            
        <h3>WorkTeam:</h3>
         <ol>
             <xsl:apply-templates/>
         </ol>

        </div>
    </xsl:template>
    
    <xsl:template match="member">
        <li><xsl:value-of select="identifier"/> - <xsl:value-of select="name"/> - <a href="mailto:{email}"><xsl:value-of select="name"/></a> <img path="{photo/@path}"/> </li>
    </xsl:template>
    <xsl:template match="abstract">
        <br/>
        <div style="border: 2px black solid">
        <h3>ABSTRACT:</h3>  
           <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="i"><i><xsl:apply-templates/></i></xsl:template>
    <xsl:template match="b"><b><xsl:apply-templates/></b></xsl:template>
    <xsl:template match="u"><u><xsl:apply-templates/></u></xsl:template>
    
    <xsl:template match="deliverables">
        <br/>
        <div style="border: 2px black solid">
        <h3>Deliverables:</h3>
        <ul>
            <xsl:apply-templates/>
        </ul>
        </div>
    </xsl:template>
    <xsl:template match="deliverable">
        <li><a href="{@path}"><xsl:value-of select="."/></a></li>
    </xsl:template>
    
</xsl:stylesheet>